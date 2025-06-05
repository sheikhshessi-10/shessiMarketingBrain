
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Key, Eye, EyeOff } from 'lucide-react';

interface ApiKeyInputProps {
  onApiKeySet: (apiKey: string) => void;
}

const ApiKeyInput = ({ onApiKeySet }: ApiKeyInputProps) => {
  const [apiKey, setApiKey] = useState('');
  const [showKey, setShowKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySet(apiKey.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md p-6 glow-border">
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
            <Key className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold gradient-text mb-2">
            AI Marketing Co-Pilot
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your AI API key to unlock your personal marketing mentor
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="apiKey" className="text-sm font-medium">
              OpenAI API Key
            </Label>
            <div className="relative">
              <Input
                id="apiKey"
                type={showKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="pr-10 bg-input border-border focus:border-primary transition-colors"
                required
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowKey(!showKey)}
              >
                {showKey ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Your API key is stored locally and never sent to our servers
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            disabled={!apiKey.trim()}
          >
            Start Building 🚀
          </Button>
        </form>

        <div className="mt-6 pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground space-y-1">
            <p className="font-medium">What you'll get:</p>
            <ul className="space-y-1 ml-2">
              <li>• Alex Hormozi-style tactical advice</li>
              <li>• Real-time AI tool recommendations</li>
              <li>• $100M Offers & Leads frameworks</li>
              <li>• 22 Laws of Marketing insights</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ApiKeyInput;
