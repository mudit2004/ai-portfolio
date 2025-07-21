import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description: 'This tool provides a link to Mudit Golchha’s resume.',
  parameters: z.object({}),
  execute: async () => {
    return "You can view or download my resume here: [Mudit's Resume](./Mudit_Golchha_Resume.pdf)";
  },
});