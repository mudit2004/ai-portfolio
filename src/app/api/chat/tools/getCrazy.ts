import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "This tool shares a fun or unexpected fact about Mudit Golchha. Use it when the user asks something like: 'What’s the craziest thing you’ve done?'",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s something a bit unexpected...

🎸 I started a college band called *The_Unknowns* and led it as both guitarist and sound engineer.  
🎥 I also led a university video production team that covered dozens of events — our videos crossed 500K+ views collectively.  
🏋️‍♂️ And yeah — I hit the gym regularly and love pushing my limits.  

Creativity + code + hustle — that's my jam. 😄`;
  },
});