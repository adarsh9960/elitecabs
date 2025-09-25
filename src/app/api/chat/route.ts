import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    
    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const zai = await ZAI.create();

    // Create a system prompt that restricts the AI to only respond to cab booking related queries
    const systemPrompt = `You are an AI assistant for Elite Cabs 24X7, a taxi service in Mumbai, India. You can only respond to questions related to cab booking, taxi services, transportation, and travel within Mumbai. 

If a user asks about anything unrelated to cab booking, taxi services, or transportation in Mumbai, politely redirect them to ask about cab booking services only.

Your responses should be helpful, concise, and focused on:
- Cab booking and reservations
- Taxi services and rates
- Airport transfers
- Local and outstation travel
- Mumbai sightseeing tours
- Vehicle types and fleet information
- Payment methods
- Booking process
- Customer service
- Travel tips and recommendations

Always maintain a professional and friendly tone. If you don't have specific information about Elite Cabs 24X7's rates or services, provide general guidance about taxi services in Mumbai.`;

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: systemPrompt
        },
        {
          role: 'user',
          content: message
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const aiResponse = completion.choices[0]?.message?.content || 'I apologize, but I can only assist with cab booking related queries. How can I help you with your taxi service needs?';

    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
}