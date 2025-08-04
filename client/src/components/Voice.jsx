import React from 'react'

export default function Voice() {
   const [output, setOutput] = useState("Click 🎙️ and speak");
  const recognitionRef = useRef(null);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const respondToIntent = (intent, text) => {
    let response = "I didn't understand.";

    if (intent === "greet") {
      response = "Hello there!";
    } else if (intent === "getTime") {
      response = `The time is ${new Date().toLocaleTimeString()}`;
    } else if (intent === "playYouTubeSong") {
      const query = text;
      window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, "_blank");
      response = `Searching YouTube for "${query}"`;
    }

    setOutput((prev) => prev + "\nBot: " + response);
    speak(response);
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = false;

      recognitionRef.current.onresult = async (event) => {
        const text = event.results[0][0].transcript;
        setOutput("You: " + text);

        try {
          const witResponse = await fetch(
            `https://api.wit.ai/message?v=20240724&q=${encodeURIComponent(text)}`,
            {
              headers: {
                Authorization: "Bearer YOUR_WIT_AI_TOKEN"
              }
            }
          );
          const data = await witResponse.json();
          console.log("Wit.ai response:", data);

          const intent = data.intents?.[0]?.name || "unknown";
          respondToIntent(intent, text);
        } catch (error) {
          console.error("Error with Wit.ai request:", error);
          setOutput("Bot: Sorry, there was an error.");
          speak("Sorry, there was an error.");
        }
      };
    }

    setOutput("🎧 Listening...");
    recognitionRef.current.start();
  };

  return (
    <>
       <button onClick={startListening}>🎙️</button>
        
    </>
  )
}
