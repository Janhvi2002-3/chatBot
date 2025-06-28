
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');


const API_KEY = "AIzaSyATswNxwnSSiRBM9QYmaQtVql_-FJCjQq4"; 


function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', `${sender}-message`);
  messageDiv.textContent = text;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}


function showTypingIndicator() {
  const indicatorDiv = document.createElement('div');
  indicatorDiv.classList.add('message', 'bot-message', 'typing-indicator');
  indicatorDiv.id = 'typing-indicator';
  indicatorDiv.innerHTML = `<span></span><span></span><span></span>`;
  chatWindow.appendChild(indicatorDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}


async function getGeminiProResponse(userText) {

const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${API_KEY}`;





  const payload = {
    contents: [
      {
        parts: [{ text: userText }]
      }
    ],
    generationConfig: {
      temperature: 0.7,
      topK: 1,
      topP: 1,
      maxOutputTokens: 256
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log("✅ Gemini Pro Response:", data);

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return reply || "⚠️ Gemini Pro replied but returned no content.";
  } catch (err) {
    console.error("❌ API error:", err);
    return "❌ Failed to contact Gemini Pro.";
  }
}



// --- Main send handler ---
async function handleSendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;

  appendMessage(userText, 'user');
  userInput.value = '';
  showTypingIndicator();
  sendBtn.disabled = true;

  try {
    const botReply = await getGeminiProResponse(userText);
    removeTypingIndicator();
    appendMessage(botReply, 'bot');
  } catch (error) {
    console.error("❌ Chat error:", error);
    removeTypingIndicator();
    appendMessage("Something went wrong.", 'bot');
  } finally {
    sendBtn.disabled = false;
    userInput.focus();
  }
}

// --- Event Listeners ---
sendBtn.addEventListener('click', handleSendMessage);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleSendMessage();
});
