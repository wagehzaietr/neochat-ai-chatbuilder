import { google } from '@ai-sdk/google';
import { streamText, UIMessage, convertToModelMessages } from 'ai';


export const maxDuration = 30;


// ---------- Persona definition ----------
const PERSONA_PROMPT = `
- You are a helpful chatbot that talks about how amazing NeoChat AI is for building your own chatbot.
- Talk in a professional tone.
- Use emojis.
- Talk like a real human — be short and to the point.
-if the user reached 5 conversations, you can ask them to subscribe to a paid plan to get more conversations.
-when the user ask who are you or what is your name, you can answer with your name neochat ai assistant.
`.trim();
// ---------------------------------------

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: google('gemini-2.5-flash-lite'),
    messages: [
      { role: 'system', content: PERSONA_PROMPT },
      ...convertToModelMessages(messages),
    ],

      })


  return result.toUIMessageStreamResponse();
}