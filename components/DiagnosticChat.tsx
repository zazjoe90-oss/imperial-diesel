import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertTriangle, Loader2, Gauge } from 'lucide-react';
import { getDiagnosticResponse } from '../services/geminiService';
import { ChatMessage, DiagnosticStatus } from '../types';

const DiagnosticChat: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Welcome to Imperial Diesel Diagnostics. I'm your AI mechanic assistant. Tell me about the issues you're experiencing with your vehicle (e.g., 'black smoke', 'loss of power', 'grinding brakes')."
    }
  ]);
  const [status, setStatus] = useState<DiagnosticStatus>(DiagnosticStatus.IDLE);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === DiagnosticStatus.LOADING) return;

    const userText = input.trim();
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setStatus(DiagnosticStatus.LOADING);

    try {
      // Build simple history string for context
      const history = messages.map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.text}`);
      
      const responseText = await getDiagnosticResponse(userText, history);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
      };
      
      setMessages(prev => [...prev, botMessage]);
      setStatus(DiagnosticStatus.SUCCESS);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "I'm having trouble connecting to the Imperial Diesel diagnostic server. Please call us for immediate assistance.",
        isError: true
      }]);
      setStatus(DiagnosticStatus.ERROR);
    }
  };

  return (
    <section id="diagnostic" className="py-20 bg-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block p-2 bg-white rounded shadow-sm border border-slate-200 mb-4">
               <span className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wider">
                 <Gauge size={18} className="text-accent-600" /> AI Diagnostic Tool
               </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              TROUBLE WITH YOUR <br/>
              <span className="text-accent-600">ENGINE?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Imperial Diesel leverages advanced Gemini technology to analyze your symptoms instantly. 
              From diesel particulate filter warnings to strange knocking sounds, get a preliminary check before you visit the shop.
            </p>
            
            <div className="bg-white p-6 rounded border-l-4 border-red-500 shadow-lg">
               <div className="flex items-start gap-4">
                 <AlertTriangle className="text-red-500 shrink-0 mt-1" />
                 <div>
                   <h4 className="font-bold text-slate-900 uppercase tracking-wide">Emergency Warning</h4>
                   <p className="text-slate-600 text-sm mt-1">
                     If you see smoke, fire, or experience brake failure, stop immediately and call the Imperial Diesel emergency line: <a href="tel:5551234567" className="text-accent-600 font-bold hover:underline">(555) 123-4567</a>.
                   </p>
                 </div>
               </div>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-slate-200 flex flex-col h-[600px]">
              
              {/* Chat Header */}
              <div className="bg-slate-900 p-5 flex items-center gap-4 border-b-4 border-accent-500">
                <div className="bg-white/10 p-2 rounded">
                  <Bot className="text-accent-500 w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Imperial Assistant</h3>
                  <p className="text-slate-400 text-xs flex items-center gap-1 uppercase tracking-wider">
                    <span className="w-2 h-2 bg-green-500 rounded-full block animate-pulse"></span> System Online
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`
                      max-w-[85%] rounded p-5 text-sm md:text-base shadow-sm
                      ${msg.role === 'user' 
                        ? 'bg-slate-800 text-white rounded-br-none' 
                        : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'}
                      ${msg.isError ? 'bg-red-50 border-red-200 text-red-800' : ''}
                    `}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {status === DiagnosticStatus.LOADING && (
                   <div className="flex justify-start">
                     <div className="bg-white border border-slate-200 rounded rounded-bl-none p-5 shadow-sm flex items-center gap-3">
                       <Loader2 className="w-5 h-5 text-accent-600 animate-spin" />
                       <span className="text-slate-500 font-medium">Running diagnostics...</span>
                     </div>
                   </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Describe the problem..."
                    className="w-full pl-5 pr-14 py-4 bg-slate-100 border-transparent focus:bg-white focus:border-accent-500 focus:ring-1 focus:ring-accent-500 rounded transition-all outline-none text-slate-800 placeholder:text-slate-400 font-medium"
                    disabled={status === DiagnosticStatus.LOADING}
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || status === DiagnosticStatus.LOADING}
                    className="absolute right-2 top-2 bottom-2 aspect-square bg-slate-900 text-white rounded hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticChat;