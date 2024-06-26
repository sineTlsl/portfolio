import { ReactNode } from 'react';

export type ConnectIcon = {
  nameKr: string;
  name: string;
  icon?: ReactNode;
  href?: string;
  copyText?: string;
};

export type SkillIcon = {
  name: string;
  icon: string;
};
