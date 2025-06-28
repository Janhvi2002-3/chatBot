## 🤖 DSA Chatbot using Google Gemini API

A conversational chatbot that answers **Data Structure & Algorithm (DSA)** questions using **Google Gemini 1.5 Pro** API.
Built with vanilla **HTML, CSS, JavaScript**, and connected to the **Gemini API via REST** — this project demonstrates AI integration in the browser with custom frontend.

---

### 📸 Demo UI Preview


![image](https://github.com/user-attachments/assets/e7bd6915-9f17-4d12-915f-f9a1644028ee)


`![Chatbot Screenshot](./screenshot.png)`

---

### 🚀 Features

* 💬 Conversational chatbot interface
* 🧠 Powered by Google Gemini 1.5 Pro (`v1beta` API)
* ⚙️ Realtime fetch with `fetch()` and async/await
* 🌙 Fully responsive UI with typing animation
* 👩‍🏫 Optional DSA-instructor personality (prompt tuning)
* ❌ Rude replies to non-DSA questions (for fun 😄)

---

### 📦 Tech Stack

* `HTML5`
* `CSS3`
* `JavaScript (ES6)`
* `Google Generative Language API (Gemini)`

---

### 🔑 Setup Instructions

> ⚠️ Requires an API key from Google [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)

1. Clone this repo:

```bash
git clone https://github.com/janhvi-singh/DSA-chatbot.git
```

2. Replace your API key in `DSA.js`:

```js
const API_KEY = "YOUR_API_KEY_HERE";
```

3. Open `index.html` in **Live Server** or run:

```bash
npx serve .
# OR
python -m http.server
```

---

### 💡 Prompt Configuration

To turn the chatbot into a **DSA instructor**, add this system prompt inside `payload.contents`:

```js
{
  role: "system",
  parts: [{ text: "You are a polite and helpful DSA instructor. Only respond to Data Structure and Algorithm queries. Rude if off-topic." }]
}
```

---

### 🧠 What I Learned

* Handling Gemini API authentication & rate limits
* Parsing structured JSON responses from LLMs
* Building a complete frontend for an AI bot
* Debugging REST calls, console logs & error states
* Writing async code cleanly in real projects
* Patience and persistence 💪

---


### 📚 Resources

* [Google Gemini API Docs](https://ai.google.dev/gemini-api/docs)
* [IBM SkillsBuild](https://skillsbuild.org/)

---

### 📌 To-Do (Optional Improvements)

* Add chat history memory
* Use backend to secure API key
* Add Gemini Flash support toggle
* Export chat to PDF








