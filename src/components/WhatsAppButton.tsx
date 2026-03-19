
"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export const WhatsAppButton = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [showEmoji, setShowEmoji] = useState(false);
    const [isBehindEdge, setIsBehindEdge] = useState(false);
    const [showLabel, setShowLabel] = useState(true);
    
    const waBtnRef = useRef<HTMLDivElement>(null);
    const hasInteracted = useRef(false);
    const PHONE_NUMBER = "254707810650";

    // Vibration Logic
    useEffect(() => {
        let vibrationCount = 0;
        const maxVibrations = 4;
        let vibrationTimer: NodeJS.Timeout;

        const triggerVibration = () => {
            if (hasInteracted.current || isChatOpen) return;
            
            if (vibrationCount < maxVibrations) {
                waBtnRef.current?.classList.add('vibrate-now');
                setTimeout(() => {
                    waBtnRef.current?.classList.remove('vibrate-now');
                    vibrationCount++;
                    if (vibrationCount < maxVibrations) {
                        vibrationTimer = setTimeout(triggerVibration, 5000);
                    }
                }, 450);
            }
        };
        
        const initialTimeout = setTimeout(triggerVibration, 5000);
        return () => {
            clearTimeout(initialTimeout);
            clearTimeout(vibrationTimer);
        };
    }, [isChatOpen]);

    // Footer Observer Logic
    useEffect(() => {
        const footerTrigger = document.getElementById('footer-observer');
        if (!footerTrigger) return;

        const observer = new IntersectionObserver((entries) => {
            const footerEntry = entries[0];
            setIsBehindEdge(footerEntry.isIntersecting);
            if (footerEntry.isIntersecting) setIsChatOpen(false);
        }, { threshold: 0.1 });

        observer.observe(footerTrigger);

        return () => observer.disconnect();
    }, []);

    // Sync label visibility with chat state
    useEffect(() => {
        setShowLabel(!isChatOpen);
    }, [isChatOpen]);


    const handleSendMessage = () => {
        const text = message.trim() || "Hello! 👋 I'm interested in Number Craft Consulting services.";
        window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
        setMessage('');
        setIsChatOpen(false);
    };

    const addEmoji = (emoji: string) => {
        setMessage(prev => prev + emoji);
        setShowEmoji(false);
    };

    return (
        <>
            {/* Chat Box Overlay */}
            <div className={`wa-chat-overlay ${isChatOpen ? 'open' : ''}`}>
                <div className="chat-header">
                    <div style={{ position: 'relative' }}>
                        <Image src="/whatsapp-profile.png" width={48} height={48} className="profile-img" alt="Profile" />
                        <span className="online-dot"></span>
                    </div>
                    <div className="header-text">
                        <h4>Number Craft Consulting</h4>
                        <p>Online</p>
                    </div>
                    <button 
                        style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '28px', cursor: 'pointer' }}
                        onClick={() => setIsChatOpen(false)}
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
                        style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#FFFFFF' }}
                        onClick={() => setShowEmoji(!showEmoji)}
                    >
                        ☺
                    </button>
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button className="send-btn" onClick={handleSendMessage}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Floating Trigger Button */}
            <div className={`wa-wrapper ${isBehindEdge ? 'hide-behind-edge' : ''}`}>
                {showLabel && (
                    <div className="chat-label">Chat with us</div>
                )}
                <div 
                    className="wa-btn" 
                    ref={waBtnRef}
                    onClick={() => {
                        setIsChatOpen(!isChatOpen);
                        if (!hasInteracted.current) {
                           hasInteracted.current = true;
                        }
                    }}
                >
                    <Image 
                        src="/whatsapp.png" 
                        alt="WhatsApp"
                        width={65}
                        height={65}
                    />
                </div>
            </div>
        </>
    );
};

    