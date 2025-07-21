import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Returns details about the kind of internship Mudit Golchha is seeking, plus contact info.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Start**: Open to internships starting **Fall 2025** or **Spring 2026**  
- 🌍 **Location**: United States (remote or hybrid preferred)  
- 🧠 **Focus Areas**: AI/ML, Full Stack Development, IoT & Cloud Systems  
- 💻 **Tech Stack**: Java, Python, React/Next.js, MongoDB, Docker, GPT APIs, Unity ML, Streamlit  
- 🏭 **Past Experience**: Interned at Universal Instruments, where I built IoT sensor pipelines and real-time performance dashboards  
- 🎓 **Current**: MS in Computer Science (AI), Binghamton University

📬 **Contact me** via:  
- Email: golchhamudit2203@gmail.com  
- LinkedIn: [linkedin.com/in/muditgolchha](https://www.linkedin.com/in/muditgolchha)  
- GitHub: [github.com/mudit2004](https://github.com/mudit2004)

If your team is building something cool in AI or systems — let’s talk! 🚀`;
  },
});