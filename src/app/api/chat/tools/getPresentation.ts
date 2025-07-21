import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Mudit Golchha. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Mudit Golchha, a CS grad student at Binghamton University specializing in AI, ML/DL, and Reinforcement Learning. I’ve worked on a range of projects from designing my own programming language (MLang) to building intelligent systems using Unity and Streamlit. I’m passionate about solving real-world problems with code, and I recently interned at Universal Instruments where I helped build IoT data pipelines and cloud dashboards.",
    };
  },
});