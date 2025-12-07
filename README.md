# 🤖 AVIN AI ChatBot Web Application

An intelligent **AI-powered full-stack chatbot web application** built using **React, Node.js, Express, and Wit.ai**. The chatbot understands user queries through **Natural Language Processing (NLP)** and provides smart responses with support for **voice input, news, weather, search results, and dark mode UI**.

---

## 📌 Features

- ✅ AI-powered chatbot using **Wit.ai NLP**
- ✅ **Voice input / Speech recognition**
- ✅ **News search integration**
- ✅ **Weather information system**
- ✅ **Smart response handling**
- ✅ **Light & Dark Mode UI**
- ✅ **Modern Responsive UI**
- ✅ **Full-stack architecture (Client + Server)**
- ✅ **Real-time message processing**

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js

### AI & APIs
- Wit.ai (Natural Language Processing)
- Weather API
- News API

---

## 🔄 Application Workflow

1. User enters a message (text or voice).
2. Message is sent from **React frontend** to the **Node.js backend**.
3. Backend forwards the text to **Wit.ai**.
4. Wit.ai detects **intent and entities**.
5. Based on intent, the app fetches:
   - Weather data  
   - News updates  
   - Search information  
6. Smart response is displayed in the chat UI.

---


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AvinashShetty7/AVIN-AI-ChatBot-App.git
cd AVIN-AI-ChatBot-App
cd server
npm install

PORT=5000
WIT_TOKEN=your_wit_ai_access_token
WEATHER_API_KEY=your_weather_api_key
NEWS_API_KEY=your_news_api_key

npm start

cd client
npm install
npm run dev



