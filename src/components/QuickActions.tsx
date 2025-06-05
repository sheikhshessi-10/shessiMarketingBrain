
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Target, Users, Megaphone, Zap, BookOpen, TrendingUp, DollarSign, Brain } from 'lucide-react';

interface QuickActionsProps {
  onQuickAction: (prompt: string) => void;
}

const QuickActions = ({ onQuickAction }: QuickActionsProps) => {
  const quickActions = [
    {
      icon: Target,
      title: "Grand Slam Offer",
      prompt: "Help me create a Grand Slam Offer using proven value equation principles. Walk me through: Dream Outcome, Perceived Likelihood, Time Delay, and Effort/Sacrifice for my business. Include guarantee structure and naming convention.",
      color: "text-green-400"
    },
    {
      icon: Users,
      title: "Core Four Strategy",
      prompt: "Give me the Core Four lead generation strategy breakdown for my business: Warm Outreach, Cold Outreach, Content, and Paid Ads. Which should I focus on first and what are the exact daily actions?",
      color: "text-blue-400"
    },
    {
      icon: DollarSign,
      title: "Pricing Psychology",
      prompt: "Use proven marketing laws to help me price my offer. Apply the Law of Perception, Law of the Mind, and Law of Sacrifice. What pricing strategy will make my offer irresistible?",
      color: "text-yellow-400"
    },
    {
      icon: Zap,
      title: "Tool Stack 2024",
      prompt: "What's the exact tool stack I need for: lead generation, content creation, email automation, and funnel optimization? Give me specific tools with pricing and ROI expectations.",
      color: "text-purple-400"
    },
    {
      icon: Brain,
      title: "Content Strategy",
      prompt: "Build me a strategic content strategy. How do I 'document don't create' while applying proven marketing principles? Include platform-specific tactics and content pillars that drive leads.",
      color: "text-cyan-400"
    },
    {
      icon: TrendingUp,
      title: "Scale Framework",
      prompt: "I want to scale from my current revenue to 7-figures. Give me the exact scaling framework: systems, team, processes. What are the bottlenecks I need to solve first?",
      color: "text-red-400"
    },
    {
      icon: Megaphone,
      title: "Outreach Scripts",
      prompt: "Write me high-converting cold outreach scripts for email and LinkedIn using proven frameworks. Include follow-up sequences and tools to automate personalization at scale.",
      color: "text-orange-400"
    },
    {
      icon: BookOpen,
      title: "Positioning Strategy",
      prompt: "Use proven marketing laws to position my business. Apply the Law of Category, Law of Leadership, and Law of the Opposite. How do I own a category in my market?",
      color: "text-pink-400"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-lg font-semibold mb-4 text-center">Quick Actions - Strategic Frameworks</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className="p-4 cursor-pointer hover:bg-card/80 transition-colors border-border hover:border-primary/30"
              onClick={() => onQuickAction(action.prompt)}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg bg-secondary flex items-center justify-center`}>
                  <action.icon size={16} className={action.color} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-sm mb-1">{action.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {action.prompt.substring(0, 60)}...
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
