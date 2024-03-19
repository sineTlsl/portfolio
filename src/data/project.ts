import { Project } from '@/types/project';

export const PROJECTS: Project[] = [
  {
    name: 'Ticat',
    image: 'ticat-preview.jpeg',
    description:
      '다양한 축제 정보를 효과적으로 제공하여 사용자가 쉽고 빠르게 흥미로운 축제를 찾아 새로운 경험을 할 수 있도록 도와주는 웹 사이트',
    isTeam: true,
    skills: [
      'React',
      'Typescript',
      'Zustand',
      'React Query',
      'Styled Components',
    ],
  },
  {
    name: '매주매주',
    image: 'mejumeju-preview.png',
    description:
      '여러 주류에 대한 정보를 제공하고, 내 위치에서 가까운 매장을 보여주고, 사용자가 원하는 매장에서 픽업을 할 수 있는 웹 쇼핑몰 사이트',
    isTeam: true,
    skills: ['React', 'Typescript', 'Redux Toolkit', 'Styled Components'],
  },
  {
    name: 'VBlog',
    image: 'vblog-preview.png',
    description:
      '다양한 축제 정보를 효과적으로 제공하여 사용자가 쉽고 빠르게 흥미로운 축제를 찾아 새로운 경험을 할 수 있도록 도와주는 웹 사이트',
    isTeam: true,
    skills: ['React', 'Typescript', 'Zustand', 'Styled Components'],
  },
];
