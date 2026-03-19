"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHiddenInitial, setIsHiddenInitial] = useState(true);
  const [showLabel, setShowLabel] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");
  
  const waWrapperRef = useRef<HTMLDivElement>(null);
  const vibrationRef = useRef(0);
  const PHONE_NUMBER = "254707810650";

  // Slide in after 500ms
  useEffect(() => {
    const timer = setTimeout(() => setIsHiddenInitial(false), 500);
    return () => clearTimeout(timer);
  }, []);

  // Vibration logic
  useEffect(() => {
    const triggerVibration = () => {
      if (vibrationRef.current < 4 && !isOpen && waWrapperRef.current && !waWrapperRef.current.classList.contains('hide-behind-edge')) {
        waWrapperRef.current?.querySelector('.wa-btn')?.classList.add('vibrate-now');
        setTimeout(() => {
          waWrapperRef.current?.querySelector('.wa-btn')?.classList.remove('vibrate-now');
          vibrationRef.current += 1;
          if (vibrationRef.current < 4) {
            setTimeout(triggerVibration, 5000);
          }
        }, 500);
      }
    };

    const initialVibrateTimer = setTimeout(triggerVibration, 5000);
    return () => clearTimeout(initialVibrateTimer);
  }, [isOpen]);

  // Intersection Observer for Footer
  useEffect(() => {
    const wrapper = waWrapperRef.current;
    const footerTrigger = document.getElementById('footer-observer');

    if (!wrapper || !footerTrigger) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          wrapper.classList.add('hide-behind-edge');
          setIsOpen(false);
        } else {
          wrapper.classList.remove('hide-behind-edge');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(footerTrigger);
    return () => observer.disconnect();
  }, []);

  const handleSendMessage = () => {
    const text = message.trim() || "Hello!";
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    setMessage("");
  };

  const addEmoji = (emoji: string) => {
    setMessage(prev => prev + emoji);
    setShowEmoji(false);
  };

  return (
    <>
      {/* Chat Overlay */}
      <div className={`wa-chat-overlay ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <Image src="/image.png" width={45} height={45} className="profile-img" alt="Profile" />
          <div className="header-text">
            <h4>Number Craft Consulting</h4>
            <p>Online</p>
          </div>
          <button 
            style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'white', fontSize: '28px', cursor: 'pointer' }}
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
          >
            &times;
          </button>
        </div>

        <div className="chat-body">
          <div className="message-bubble">
            Hello! 👋 Welcome to Number Craft Consulting. How can we help you today?
          </div>
        </div>

        {showEmoji && (
          <div className="emoji-panel">
            {["😊", "😂", "😍", "👍", "🙏", "👋", "🔥", "✨", "✅", "🤔"].map(emoji => (
              <span key={emoji} onClick={() => addEmoji(emoji)}>{emoji}</span>
            ))}
          </div>
        )}

        <div className="chat-input-area">
          <button 
            onClick={() => setShowEmoji(!showEmoji)}
            style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: 'white' }}
            aria-label="Toggle emoji panel"
          >
            ☺
          </button>
          <input 
            type="text" 
            placeholder="Type a message..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          />
          <button className="send-btn" onClick={handleSendMessage} aria-label="Send message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <div ref={waWrapperRef} className={`wa-wrapper ${isHiddenInitial ? 'hidden-initial' : ''}`}>
        {showLabel && <div className="chat-label">Chat with us</div>}
        <div 
          className="wa-btn"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowLabel(false);
            vibrationRef.current = 4; // Stop future vibrations
          }}
        >
          <Image src="/image.png" width={70} height={70} alt="WhatsApp" />
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
