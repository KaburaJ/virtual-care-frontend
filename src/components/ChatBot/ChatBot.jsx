import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);


  const handleChatbotResponse = async () => {
    if (input.trim() === '') return;

    try {
      // Send user's message to OpenAI for processing
      const response = await axios.post('/api/openai', { input });

      // Add user's message to the chat
      setMessages([...messages, { text: input, user: true }]);
      
      // Add the chatbot's response to the chat
      setMessages([...messages, { text: response.data.output, user: false }]);
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
    }

    // Clear the input field
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleChatbotResponse();
    }
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={message.user ? 'user-message' : 'bot-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleChatbotResponse}>Send</button>
    </div>
  );
};

export default Chatbot;
