import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

// IMPORTANT: Set the runtime to edge
export const runtime = "edge";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Request the OpenAI API for the response based on the prompt
    const result = streamText({
      model: openai("gpt-4o"),
      system:
        "You are ShuAI, an AI assistant created by Shubham Asati. You are helpful, friendly, and knowledgeable. You provide concise and accurate responses. If you are unsure about something, you acknowledge it rather than making up information.",
      messages: messages,
      temperature: 0.7,
    });

    // Respond with the stream
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat API:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred during your request." }),
      {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
}
