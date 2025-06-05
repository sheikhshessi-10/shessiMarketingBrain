import React, { useState, useEffect } from 'react';
import { generateMarketingStrategy } from '@/utils/gemini';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "All your fav marketing resources, I have them, captain Shessi."
    },
    {
      role: 'assistant',
      content: "I am hungry to learn. Feed me with more marketing masterclasses."
    },
    {
      role: 'assistant',
      content: "Ask me anything, Sheikh Shessi! I am all set and ready to go."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Listen for quick action events
    const handleQuickAction = (event: CustomEvent) => {
      handleSendMessage(event.detail);
    };

    window.addEventListener('quickActionSelected', handleQuickAction as EventListener);
    return () => {
      window.removeEventListener('quickActionSelected', handleQuickAction as EventListener);
    };
  }, []);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { role: 'user', content: message }]);
    setInput('');
    setIsLoading(true);

    try {
      // Get response from Gemini
      const response = await generateMarketingStrategy(message);
      
      // Add assistant message
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'No API key! Add an API key to access your marketing brain Shessi' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full p-4">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <Card 
            key={index} 
            className={`p-4 ${
              message.role === 'user' 
                ? 'bg-primary/10 ml-auto' 
                : 'bg-card'
            } max-w-[80%]`}
          >
            <p className="whitespace-pre-wrap">{message.content}</p>
          </Card>
        ))}
        {isLoading && (
          <Card className="p-4 bg-card max-w-[80%]">
            <p>Thinking...</p>
          </Card>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
          placeholder="Your command, captain Sheikh Shessi..."
          disabled={isLoading}
        />
        <Button 
          onClick={() => handleSendMessage(input)}
          disabled={isLoading || !input.trim()}
        >
          <Send size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ChatInterface;
