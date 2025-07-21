import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// Project data
const PROJECT_CONTENT = [
  {
    title: 'Interpreter for MLang',
    description:
      'Designed and implemented MLang, a custom programming language with a unique syntax using ANTLR4 and Java. Built a full AST-based interpreter with variable scope handling, control flow, and print support.',
    techStack: ['Java', 'ANTLR4', 'AST', 'Compiler Design'],
    date: '2025',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/mudit2004/MLang',
      },
    ],
    images: [
      {
        src: '/mlang-placeholder.png',
        alt: 'MLang project preview',
      },
    ],
  },
  {
    title: 'RL-Based Self-Driving Car in Unity',
    description:
      'Created an autonomous driving agent using PPO and SAC algorithms inside a Unity environment. Integrated RayPerceptionSensor3D, invisible checkpoints, and custom reward shaping to enhance driving performance and reduce training time.',
    techStack: ['Unity', 'PPO', 'SAC', 'C#', 'ML-Agents'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/mudit2004/RL-Based-Self-Driving-Car-in-Unity',
      },
    ],
    images: [
      {
        src: '/rlcar-placeholder.png',
        alt: 'RL Car preview',
      },
    ],
  },
  {
    title: 'Brain Tumor Diagnosis via ML Models',
    description:
      'Collaborated to build a diagnostic system using 10 ML models on metabolite profiles, achieving 91.95% accuracy with EvoHDTree. Added a GUI for interpreting predictions and visualizing results.',
    techStack: ['Python', 'Scikit-learn', 'Streamlit', 'ADASYN'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/mudit2004/Enhancing-Machine-Learning-Models-for-Early-Brain-Tumor-Diagnosis',
      },
    ],
    images: [
      {
        src: '/brainml-placeholder.png',
        alt: 'Brain tumor diagnosis preview',
      },
    ],
  },
];

// Interface
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

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
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
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

      {projectData.links && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
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

      {projectData.images && (
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
    category: 'Programming Languages',
    title: 'Interpreter for MLang',
    src: '/mlang-placeholder.png',
    content: <ProjectContent project={{ title: 'Interpreter for MLang' }} />,
  },
  {
    category: 'Reinforcement Learning',
    title: 'RL-Based Self-Driving Car in Unity',
    src: '/rlcar-placeholder.png',
    content: <ProjectContent project={{ title: 'RL-Based Self-Driving Car in Unity' }} />,
  },
  {
    category: 'Machine Learning',
    title: 'Brain Tumor Diagnosis via ML Models',
    src: '/brainml-placeholder.png',
    content: <ProjectContent project={{ title: 'Brain Tumor Diagnosis via ML Models' }} />,
  },
];