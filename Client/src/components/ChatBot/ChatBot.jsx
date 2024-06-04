import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';
import Navbar from '../navbar/navbar';
import twitterpng from '../images/tw-removebg-preview.png'
import instagrampng from '../images/ig-removebg-preview.png'
import facebookpng from '../images/fb-removebg-preview.png'
import logo from '../images/logo-virtual.png'
import "./ChatBot.css"

const socket = io('http://localhost:5001');

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState('');

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = () => {
    socket.emit('sendMessage', { text: messageText });
    setMessageText('');
  };

  return (
    <>
    <div className="Chatbot">
        <header>
        <Navbar/>
      </header>
      <h1>Real-Time Chat Chatbot</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} username={message.username} text={message.text} />
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      
    </div>
    <footer style={{marginTop:"400px", marginBottom:"0px"}}>
    <div className="footer-content">
      <div className='footer-definition'>
        <img src={logo} alt='VirtualCare'></img>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>

      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebookpng} alt="Facebook" />
          <p style={{ marginTop: ".4em" }}>Facebook</p>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={twitterpng} alt="Twitter" />
          <p style={{ marginTop: ".4em" }}>Twitter</p>
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={instagrampng} alt="Instagram" />
          <p style={{ marginTop: ".4em" }}>Instagram</p>
        </a>
      </div>
      <div className="contact-info">
        <p><span className="location-icon">&#x1F4CD;</span> 123 Rongai, Kajiado, Kenya</p>
        <p><span className="location-icon">&#x260E;</span> (254) 456-7890-199</p>
        <p><span className="location-icon">&#x2709;</span> info@vitualcare.com</p>
        <p className="copy-tag" style={{ marginLeft: "-2em" }}>&copy; 2023 Virtual Care. All rights reserved.</p>
      </div>
    </div>
  </footer>
  </>
  );
}

export default Chatbot;