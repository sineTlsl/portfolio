export type Project = {
  name: string;
  image: string;
  github: string;
  figma?: string;
  url?: string;
  description: string;
  skills: string[];
  path: string;
  isTeam: boolean;
};

export type ProjectData = Project & {
  content: string;
};
