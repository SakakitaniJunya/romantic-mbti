
// app/love-advice/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Message {
  sender: 'user' | '畿央';
  text: string;
}

export default function LoveAdvicePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  // AI（畿央）の返答をシミュレーションする関数
  const getAIResponse = (userMessage: string): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // シンプルな例。必要に応じてより複雑なロジックや API 呼び出しに置き換え可能
        resolve("あなたのお気持ちはよくわかります。大切なのは自分自身を大事にすることです。");
      }, 1000);
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessage: Message = { sender: 'user', text: input.trim() };
    setMessages([...messages, newMessage]);
    setInput('');
    const aiResponse = await getAIResponse(newMessage.text);
    setMessages(prev => [...prev, { sender: '畿央', text: aiResponse }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'var(--accent-color)' }}>恋愛相談室</h1>
      <div style={{
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 10px var(--shadow-color)',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '10px' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ margin: '10px 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
              <div style={{
                display: 'inline-block',
                padding: '10px 15px',
                borderRadius: '10px',
                background: msg.sender === 'user' ? 'var(--primary-color)' : 'var(--accent-color)',
                color: '#fff',
                maxWidth: '70%'
              }}>
                <strong>{msg.sender === 'user' ? 'あなた' : '畿央'}: </strong>{msg.text}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ここにメッセージを入力..."
            style={{
              flex: 1,
              padding: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px'
            }}
          />
          <button onClick={handleSend} style={{
            padding: '10px 20px',
            background: 'var(--primary-color)',
            color: '#fff',
            border: 'none',
            borderRadius: '4px'
          }}>送信</button>
        </div>
      </div>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: 'var(--accent-color)',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: '700',
          transition: 'background 0.3s, transform 0.3s'
        }}>診断ページに戻る</Link>
      </div>
    </div>
  );
}