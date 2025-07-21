import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'This tool returns Mudit Golchha’s contact information.',
  parameters: z.object({}),
  execute: async () => {
    return {
      name: 'Mudit Golchha',
      email: 'golchhamudit2203@gmail.com',
      github: 'https://github.com/mudit2004',
      linkedin: 'https://www.linkedin.com/in/muditgolchha/',
      message: 'Feel free to reach out via email or LinkedIn. I’d be happy to connect! 🚀',
    };
  },
});