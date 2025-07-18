import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const PROJECT_CONTENT = [
  {
    title: 'MLang Interpreter',
    description:
      "MLang is a custom programming language I designed and built from scratch with a unique syntax style. It supports variables, conditionals, loops, and print statements. The interpreter is built in Java and uses ANTLR4 for parsing, with a custom AST and execution engine. The project showcases my interest in compiler design and systems programming.",
    techStack: ['Java', 'ANTLR4', 'Custom AST', 'Interpreter', 'JVM'],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/muditgolchha/MLang',
      },
    ],
    images: [
      {
        src: '/black.png',
        alt: 'MLang Interpreter placeholder image',
      },
    ],
  },
  {
    title: 'RL-Based Self-Driving Car',
    description: 'Trained an autonomous car in Unity using PPO & SAC with custom reward systems. Reduced training time drastically.',
    techStack: ['Unity', 'Python', 'Stable-Baselines3', 'Reinforcement Learning', 'ML-Agents'],
    date: '2024',
    links: [
      { name: 'GitHub', url: 'https://github.com/mudit2004/RL-Based-Self-Driving-Car-in-Unity' }
    ],
    images: [
      { src: '/white.png', alt: 'Self-driving Unity sim placeholder' }
    ]
  },
  {
    title: 'Brain Tumor Diagnosis',
    description: 'Trained 10 ML models on metabolite profiles. Achieved 91.95% accuracy using EvoHDTree with a Streamlit UI.',
    techStack: ['Python', 'Streamlit', 'Scikit-learn', 'EvoHDTree', 'ADASYN'],
    date: '2024',
    links: [
      { name: 'GitHub', url: 'https://github.com/mudit2004/Enhancing-Machine-Learning-Models-for-Early-Brain-Tumor-Diagnosis' }
    ],
    images: [
      { src: '/grey.png', alt: 'ML comparison graph placeholder' }
    ]
  }
];

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);
  if (!projectData) return <div>Project details not available</div>;

  return (
    <div className="space-y-10">
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>
          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">Links</h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const data = [
  {
    category: 'Language Design',
    title: 'MLang Interpreter',
    src: '/black.png',
    content: <ProjectContent project={{ title: 'MLang Interpreter' }} />, 
  },
  {
    category: 'Reinforcement Learning',
    title: 'RL-Based Self-Driving Car',
    src: '/white.png',
    content: <ProjectContent project={{ title: 'RL-Based Self-Driving Car' }} />, 
  },
  {
    category: 'AI for Healthcare',
    title: 'Brain Tumor Diagnosis',
    src: '/grey.png',
    content: <ProjectContent project={{ title: 'Brain Tumor Diagnosis' }} />, 
  }
];
