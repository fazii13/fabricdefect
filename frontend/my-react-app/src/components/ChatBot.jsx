import React, { useState } from 'react';
import axios from 'axios';
import '../css/ChatBot.css'; // Import the CSS file

const ChatBot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const GenerateAnswer = async () => {
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA7s2FEdqmLtm-zwelOUon0Vif8K4_U3UQ",
        {
          contents: [
            {
              parts: [
                { text: question }
              ]
            }
          ]
        }
      );

      const generatedAnswer = response.data.candidates[0].content.parts[0].text;
      setAnswer(generatedAnswer);
    } catch (error) {
      console.error("Error generating answer:", error);
      setAnswer("Error generating answer");
    }
  };

  return (
    <div className="chatbot-container">
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        cols="30"
        rows="10"
        placeholder="Message your bot" // Added placeholder attribute
      />
      
      {answer && (
        <div className="output-container">
          <p>{answer}</p>
        </div>
      )}
      <button className="stream-button" onClick={GenerateAnswer}>Generate Answer</button>
    </div>
  );
};

export default ChatBot;
