import path from 'path';
import { readFile } from 'fs/promises';
import { cache } from 'react';
import { Project, ProjectData } from '@/types/project';

/** 프로젝트 포스팅들 불러오기 */
export const getAllProjects = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projects = await readFile(filePath, 'utf-8').then<Project[]>(
    JSON.parse
  );

  return projects;
});

/** 프로젝트 이름과 같은 md 파일 불러오기 */
export async function getFindProject(findFile: string): Promise<ProjectData> {
  const filePath = path.join(
    process.cwd(),
    'data',
    'projects',
    `${findFile}.md`
  );
  const projects = await getAllProjects();
  const findProject = projects.find((project) => project.path === findFile);

  if (!findProject) {
    throw new Error(`${findFile}을 찾을 수가 없습니다.`);
  }

  const content = await readFile(filePath, 'utf-8');

  return { ...findProject, content };
}
