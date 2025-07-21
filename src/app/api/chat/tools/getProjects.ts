import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool returns a list of notable AI and ML projects by Mudit Golchha.",
  parameters: z.object({}),
  execute: async () => {
    return `Here are a few of my key projects:
1. Interpreter for MLang – A custom programming language with ANTLR4 and Java. [GitHub](https://github.com/mudit2004/MLang)
2. RL-Based Self-Driving Car – Built in Unity with PPO/SAC and advanced sensors. [GitHub](https://github.com/mudit2004/RL-Based-Self-Driving-Car-in-Unity)
3. Brain Tumor Diagnosis – ML system using EvoHDTree and Streamlit GUI. [GitHub](https://github.com/mudit2004/Enhancing-Machine-Learning-Models-for-Early-Brain-Tumor-Diagnosis)

Let me know if you'd like a deep dive into any of them! 🚀`;
  },
});