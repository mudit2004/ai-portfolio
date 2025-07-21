import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description: 'This tool returns a categorized list of Mudit Golchha’s skills and expertise.',
  parameters: z.object({}),
  execute: async () => {
    return `
Here are some of my key skills:

🧠 **Programming Languages**: Java, Python, C++, C, JavaScript, TypeScript, R  
🤖 **AI/ML/DL**: Scikit-learn, TensorFlow, PyTorch, Pandas, Reinforcement Learning (PPO/SAC), Hugging Face, Albumentations  
🧱 **Web & Cloud**: MERN Stack, Next.js, Tailwind CSS, MongoDB, SQL, Firebase, GCP, Vercel  
⚙️ **Tools & Systems**: Git, Docker, ANTLR4, Unity, Linux, Xcode, Visual Studio Code  
🧩 **Soft Skills**: Teamwork, Communication, Problem-Solving, Creativity, Adaptability

Let me know if you'd like to know more about any of these! 💡
`;
  },
});