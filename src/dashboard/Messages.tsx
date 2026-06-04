import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSendPlane2Line } from 'react-icons/ri';
import { staggerContainer, fadeUp } from '../utils/animations';

const conversations = [
  { id: 1, name: 'Alex Rivera', role: 'Lead Architect', avatar: 'A', unread: 2, lastMsg: 'The deployment is scheduled for Friday.', time: '2m ago' },
  { id: 2, name: 'Sophia Lee', role: 'Design Lead', avatar: 'S', unread: 0, lastMsg: 'Design revisions are ready for review.', time: '1h ago' },
  { id: 3, name: 'Project Bot', role: 'System', avatar: 'P', unread: 1, lastMsg: 'Milestone 2 has been completed!', time: '3h ago' },
];

const initialMessages = [
  { id: 1, from: 'Alex Rivera', text: 'Hi! Just wanted to check in on the project timeline.', time: '10:30 AM', own: false },
  { id: 2, from: 'You', text: 'Hey Alex! Everything is on track. We should hit the milestone by Friday.', time: '10:32 AM', own: true },
  { id: 3, from: 'Alex Rivera', text: 'The deployment is scheduled for Friday.', time: '10:35 AM', own: false },
];

export default function Messages() {
  const [activeConvo, setActiveConvo] = useState(conversations[0]);
  const [messages] = useState(initialMessages);
  const [input, setInput] = useState('');

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="h-[calc(100vh-9rem)]">
      <motion.h2 variants={fadeUp} className="text-xl font-bold text-primary mb-4">Messages</motion.h2>
      <div className="bg-white rounded-xl shadow-card overflow-hidden h-full flex">
        {/* Sidebar */}
        <div className="w-72 border-r border-gray-100 flex flex-col flex-shrink-0">
          <div className="p-4 border-b border-gray-100">
            <input type="text" placeholder="Search..." className="input-field text-xs py-2" />
          </div>
          <div className="overflow-y-auto flex-1">
            {conversations.map((convo) => (
              <button
                key={convo.id}
                onClick={() => setActiveConvo(convo)}
                className={`w-full flex items-start gap-3 p-4 text-left hover:bg-gray-50 transition-colors border-b border-gray-50 ${activeConvo.id === convo.id ? 'bg-primary/5' : ''}`}
              >
                <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">{convo.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm text-text-dark">{convo.name}</span>
                    <span className="text-xs text-text-muted">{convo.time}</span>
                  </div>
                  <p className="text-xs text-text-muted truncate mt-0.5">{convo.lastMsg}</p>
                </div>
                {convo.unread > 0 && (
                  <span className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {convo.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b border-gray-100 flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">{activeConvo.avatar}</span>
            </div>
            <div>
              <p className="font-semibold text-sm text-primary">{activeConvo.name}</p>
              <p className="text-xs text-text-muted">{activeConvo.role}</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.own ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm ${msg.own ? 'bg-primary text-white rounded-br-sm' : 'bg-gray-100 text-text-dark rounded-bl-sm'}`}>
                  {msg.text}
                  <p className={`text-xs mt-1 ${msg.own ? 'text-white/60' : 'text-text-muted'}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input-field flex-1"
              />
              <button className="btn-primary px-4 py-2">
                <RiSendPlane2Line size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
