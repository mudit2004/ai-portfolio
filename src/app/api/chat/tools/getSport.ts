import { tool } from "ai";
import { z } from "zod";

export const getSports = tool({
  description:
    "This tool shows a gallery of Mudit Golchha’s photography and musical interests.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s a glimpse into my creative side:

📸 I lead a university photography team and cover events — from portraits to nightscapes.  
🎸 I also founded a college band called *The_Unknowns*, and I play lead guitar.

You can scroll above to see some of my favorite photos — and soon, I’ll add a video of me performing live! 🎶`;
  },
});