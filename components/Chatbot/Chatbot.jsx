"use client";
import { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./ChatbotIcon";
import ChatForm from "./ChatForm";
import ChatMessage from "./ChatMessage";
import { companyInfo } from "./companyInfo";
import "./Chatbot.css";

const Chatbot = () => {
const [chatHistory, setChatHistory] =useState([
  {
  hideInChat: true,
  role: "system",
  text: companyInfo
},
]);

const [showChatbot, setShowChatbot] =useState(false);

const chatBodyRef = useRef();

const generateBotResponse = async (history) => {
  // helper function to update chat history
  const updateHistory = (text, isError = false) => {
    setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }]);
  };

  // format chat history for Gemini API format
  let systemInstruction = null;
  const contents = [];

  history.forEach(({ role, text }) => {
    if (role === "system") {
      systemInstruction = { parts: [{ text }] };
    } else {
      contents.push({
        role: role === "model" ? "model" : "user",
        parts: [{ text }]
      });
    }
  });

  const requestBody = { contents };
  if (systemInstruction) {
    requestBody.systemInstruction = systemInstruction;
  }

  // 1. Try server-side API route first (/api/chat)
  try {
    const apiRouteResponse = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });

    if (apiRouteResponse.ok) {
      const data = await apiRouteResponse.json();
      const rawText = data?.text || data?.choices?.[0]?.message?.content || "";
      if (rawText) {
        const apiResponseText = rawText.replace(/\*\*(.*?)\*\*/g, "$1").trim();
        updateHistory(apiResponseText);
        return;
      }
    }
  } catch (e) {
    console.warn("Server API route unavailable, attempting direct API call:", e);
  }

  // 2. Direct Gemini API call fallback
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (!apiKey) {
    updateHistory("Chatbot service is currently offline. Please contact us directly via WhatsApp or Email!", true);
    return;
  }

  const url = `${apiUrl}?key=${apiKey}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error?.message || "Unable to get response right now.");

    const apiResponseText = data?.candidates?.[0]?.content?.parts?.[0]?.text?.replace(/\*\*(.*?)\*\*/g, "$1")?.trim() || "Thank you for reaching out! Please leave your contact details or call us directly.";
    updateHistory(apiResponseText);
  } catch (error) {
    console.error("Chatbot Error:", error);
    updateHistory("Sorry, I'm having trouble responding right now. Please reach us on WhatsApp or call +91 90065 43913!", true);
  }
};

useEffect(() => {
  if(chatBodyRef.current) {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }
}, [chatHistory]);

  return(
    <div className={`chatbot-container ${showChatbot ? 'show-chatbot' : ""}`}>
   <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">

    <span className="material-symbols-rounded">mode_comment</span>
    <span className="material-symbols-rounded">close</span>
   </button>

      <div className="chatbot-popup">
        {/*chatbot header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />

            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">
keyboard_arrow_down
</button>
        </div>
     {/*chatbot body*/}
        <div ref={chatBodyRef} className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Welcome to MJ Bytech! 🚀 <br/> How can we help you with Next.js web engineering, SEO, or digital growth today?</p>
          </div>
  {/*render the chat history dynamically */}
     {chatHistory.map((chat, index)  => (
      <ChatMessage  key={index} chat={chat} />
     ))}

          
        </div>
        {/*chatbot footer*/}
        <div className="chat-footer">
          <ChatForm  chatHistory={chatHistory} setChatHistory ={setChatHistory} generateBotResponse={generateBotResponse} />
          <div className="powered-by">Powered by <a href="#home">MJ Bytech</a></div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
