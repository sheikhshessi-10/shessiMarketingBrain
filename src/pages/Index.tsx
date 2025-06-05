import React, { useState } from 'react';
import ChatInterface from '@/components/ChatInterface';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Brain, Search, Zap } from 'lucide-react';

const Index = () => {
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [pendingPrompt, setPendingPrompt] = useState<string>('');

  const handleQuickAction = (prompt: string) => {
    console.log('Quick action selected:', prompt);
    setPendingPrompt(prompt);
    setShowQuickActions(false);
    
    // Trigger the chat with this prompt
    const event = new CustomEvent('quickActionSelected', { detail: prompt });
    window.dispatchEvent(event);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-bold gradient-text">Marketing Mind</h1>
                <p className="text-xs text-muted-foreground">Your Strategic Marketing Intelligence Platform</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              {/* Removed Quick Actions Button */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-col h-[calc(100vh-73px)]">
        {/* Removed Quick Actions Section */}
        
        <div className="flex-1">
          <ChatInterface />
        </div>
      </div>

      {/* Status Footer */}
      <div className="fixed bottom-4 right-4">
        <Card className="p-3 bg-card/90 backdrop-blur-sm border-border">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-xs text-muted-foreground">
              Live Intelligence • Strategic Frameworks • Real-time Research
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
