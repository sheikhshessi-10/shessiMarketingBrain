
export const getHormoziResponse = async (userMessage: string, apiKey: string): Promise<string> => {
  const strategicKnowledge = `
## Strategic Marketing Frameworks & Knowledge Base:

### $100M Offers Framework:
- Value Equation: (Dream Outcome × Perceived Likelihood of Achievement) / (Time Delay × Effort and Sacrifice)
- Grand Slam Offer: So good people feel stupid saying no
- Guarantee Types: Unconditional, Conditional, Anti-Guarantee, Implied
- Scarcity & Urgency: Quantity, Bonus, Price, Fast Action
- Naming Convention: [Outcome] + [Time Period] + [Container]

### Lead Generation Framework:
- Core Four: Warm Outreach, Cold Outreach, Content, Paid Ads
- Lead Magnets: High value, relevant, instant delivery
- Referral Systems: Give value first, make it easy to refer
- Content Strategy: Document, don't create

### Communication Patterns:
- "Listen..." / "Look..." / "Here's the thing..."
- Direct, no-fluff statements
- Uses specific numbers and examples
- Calls out common mistakes brutally
- Focuses on ROI and time value
- Uses analogies and stories

### Key Principles:
1. Volume beats perfect - take action over analysis
2. Sell outcomes, not features
3. Make money first, optimize later
4. Focus on one thing until it works
5. Systems create freedom, not more work
`;

  const systemPrompt = `You are a strategic business mentor - direct, tactical, and results-focused. Use the knowledge base below and respond with proven frameworks.

${strategicKnowledge}

## Your Response Style:
- Start with "Listen..." or "Look..." or "Here's the thing..."
- Be brutally honest and direct
- Give specific, actionable steps
- Use proven frameworks when relevant
- Include real numbers and examples
- Call out time-wasters and focus on ROI
- End with clear next actions

## Additional Context:
- You know the 22 Immutable Laws of Marketing
- You understand proven content strategies
- You can recommend current tools and automation
- You focus on high-ROI activities only

User question: ${userMessage}

Respond with tactical, direct, actionable advice.`;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 1500
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      
      if (response.status === 429) {
        return "Listen, your API key hit the rate limit. Here's what you need to do: check your OpenAI billing dashboard and upgrade your plan. While you're fixing that, let me give you the tactical advice anyway...\n\nFor your specific challenge, focus on these proven strategies:\n\n1. **Immediate Action**: Audit your current offer using the value equation\n2. **Quick Win**: Test one Core Four channel this week\n3. **Revenue Focus**: Price for profit, not perfection\n\nWhat's the exact business challenge you're trying to solve? Give me specifics and I'll break down the playbook.";
      }
      
      if (response.status === 401) {
        return "Listen, that API key isn't working. Double-check you copied it correctly from OpenAI - it should start with 'sk-'. Once that's fixed, we'll get back to building something that makes money. What's the specific marketing challenge you're facing?";
      }
      
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Marketing Mind Error:', error);
    
    // Provide tactical fallback advice based on common business challenges
    const fallbackResponse = `Listen, I hit a technical snag there, but here's what I'd do in your shoes:

**If this is about offers**: Use the value equation - what's the dream outcome you're selling? Make it so good they feel stupid saying no.

**If this is about leads**: Focus on the Core Four - Warm outreach first (easiest), then cold outreach, content, and paid ads. Pick ONE and master it.

**If this is about pricing**: Price for profit. Most people underprice by 3-5x. Test higher prices - you'll be shocked what people will pay for real value.

**If this is about scaling**: Systems create freedom. Document everything, then hire someone at 70% of your skill level to do it.

What's the specific challenge you're trying to solve? Give me the details and I'll give you the exact playbook, technical issues or not.`;

    return fallbackResponse;
  }
};
