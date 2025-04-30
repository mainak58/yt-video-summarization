import { GoogleGenAI } from "@google/genai";
import { YoutubeTranscript } from "youtube-transcript";

const ai = new GoogleGenAI({
    apiKey: "GEMINI_API_KEY",
});

async function getTranscript(videoId: any) {
    console.log("Fetching transcript...");
    const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    const text = transcript.map((entry) => entry.text).join(" ");
    return text;
}

async function caching(transcript: any) {
    console.log("Creating cache with transcript...");
    const cache = await ai.caches.create({
        model: "models/gemini-1.5-flash-002",
        config: {
            contents: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `This is the transcript of the video: ${transcript}`,
                        },
                        { text: "Summarize this video." },
                    ],
                },
            ],
            displayName: "Video summary cache",
            ttl: "3600s",
        },
    });
    console.log("Cache created:", cache.name);
    return cache;
}

async function generateResponse(cacheName: any) {
    console.log("Generating response from cache...");
    const response = await ai.models.generateContentStream({
        model: "models/gemini-1.5-flash-002",
        contents: [
            {
                role: "user",
                parts: [{ text: "List all points in the video" }],
            },
        ],
        config: {
            cachedContent: cacheName,
        },
    });

    console.log("Response:");
    for await (const chunk of response) {
        process.stdout.write(chunk.text || "");
    }
    console.log();
}

async function main() {
    try {
        const videoId = "n8aA3DfiVuE";
        const transcript = await getTranscript(videoId);
        const cache = await caching(transcript);
        await generateResponse(cache.name);
    } catch (error) {
        console.error(error);
    }
}

main();
