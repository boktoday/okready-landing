import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const WELCOME: Message = {
  role: 'bot',
  text: "👋 G'day! I'm the OK Ready assistant. Ask me anything about the Antifragile System, pricing, the 8 pillars, coaching, the teens workshop, or the mindset.",
};

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();
}

function findAnswer(query: string, knowledge: string): string {
  const q = normalize(query);
  const sections = knowledge.split(/\n(?=## )/);

  // Score each section by relevance
  const scored = sections.map((section) => {
    const header = section.split('\n')[0] || '';
    const body = section.toLowerCase();
    const words = q.split(/\s+/).filter(w => w.length > 2);
    let score = 0;
    for (const word of words) {
      // Count occurrences in section body
      const regex = new RegExp(word, 'gi');
      const matches = body.match(regex);
      if (matches) score += matches.length;
      // Bonus for title matches
      if (header.toLowerCase().includes(word)) score += 3;
    }
    return { section, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const best = scored[0];

  if (!best || best.score < 1) {
    return (
      "I'm not sure about that one. Try asking about:\n\n" +
      "• Pricing & Early Bird deal\n" +
      "• The 8 Pillars of Readiness\n" +
      "• Coaching (Deep Guidance / Complete Guidance)\n" +
      "• Teens Workshop\n" +
      "• The Antifragile Mindset\n" +
      "• What's included in the system\n" +
      "• Waitlist signup\n" +
      "• Founder (Brendan)"
    );
  }

  // Extract the most relevant paragraph(s)
  const lines = best.section.split('\n').filter(l => l.trim());
  const relevant = lines.slice(0, 8).join('\n').trim();
  
  // If the best match is just a heading, grab the next line too
  if (relevant.startsWith('###') || relevant.startsWith('##')) {
    return relevant;
  }

  return relevant.length > 600 ? relevant.slice(0, 600) + '...' : relevant;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState('');
  const [knowledge, setKnowledge] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/okready-chat-context.md')
      .then(r => r.text())
      .then(text => {
        setKnowledge(text);
        setLoading(false);
      })
      .catch(() => {
        setKnowledge('');
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const handleSend = () => {
    const text = input.trim();
    if (!text || !knowledge) return;
    setInput('');

    const userMsg: Message = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);

    // Simulate typing delay
    setTimeout(() => {
      const answer = findAnswer(text, knowledge);
      const botMsg: Message = { role: 'bot', text: answer };
      setMessages(prev => [...prev, botMsg]);
    }, 300);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-earth-950 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="Toggle chat"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] rounded-2xl border border-amber-500/20 bg-earth-900/95 backdrop-blur-xl shadow-2xl shadow-black/40 transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
        style={{ maxHeight: 'min(600px, calc(100vh - 140px))' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-amber-500/10">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-earth-950 font-bold text-xs">
            OK
          </div>
          <div>
            <div className="text-sm font-semibold text-earth-100">OK Ready Assistant</div>
            <div className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${loading ? 'bg-amber-500 animate-pulse' : 'bg-emerald-400'}`} />
              <span className="text-[10px] text-earth-500">{loading ? 'Loading...' : 'Online'}</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="overflow-y-auto px-5 py-4 space-y-4" style={{ height: '350px' }}>
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-amber-500/20 text-amber-200 border border-amber-500/10'
                    : 'bg-earth-800/50 text-earth-300 border border-white/5'
                }`}
              >
                <p className="text-[13px] whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-5 py-3 border-t border-amber-500/10">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about OK Ready..."
              className="flex-1 bg-earth-800/50 border border-white/5 rounded-xl px-4 py-2.5 text-sm text-earth-200 placeholder-earth-500 focus:outline-none focus:border-amber-500/30 transition-colors"
              disabled={loading}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/20 text-amber-400 hover:bg-amber-500/30 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            </button>
          </div>
          <div className="text-[10px] text-earth-600 mt-2 text-center">
            Answers from the OK Ready knowledge base. Updated manually.
          </div>
        </div>
      </div>
    </>
  );
}
