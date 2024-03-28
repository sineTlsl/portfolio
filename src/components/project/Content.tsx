import { ProjectData } from '@/types/project';
import styles from './css/Content.module.css';

import ProjectDesc from '@/components/project/ProjectDesc';
import ToolTipIcon from '@/components/icon/ToolTipIcon';
import ConnectIconBtn from '@/components/button/ConnectIconBtn';
import FigmaIcon from '@/components/ui/icons/FigmaIcon';
import WebSiteIcon from '@/components/ui/icons/WebSiteIcon';
import GithubFillIcon from '@/components/ui/icons/GithubFillIcon';

type Props = {
  project: ProjectData;
};

export default function Content({ project }: Props) {
  return (
    <div className={styles['content-wrap']}>
      <div className={styles['content-header']}>
        <h1 className={styles['header-h1']}>{project.name}</h1>
        <div className={styles['header-icon']}>
          <ToolTipIcon name="깃허브로 이동">
            <ConnectIconBtn
              nameKr="깃허브"
              name="Github"
              icon={<GithubFillIcon />}
              href={project.github}
            />
          </ToolTipIcon>
          {project.figma && (
            <ToolTipIcon name="피그마로 이동">
              <ConnectIconBtn
                nameKr="피그마"
                name="Figma"
                icon={<FigmaIcon />}
                href={project.figma}
              />
            </ToolTipIcon>
          )}
          {project.url && (
            <ToolTipIcon name="사이트 방문">
              <ConnectIconBtn
                nameKr="사이트"
                name="Figma"
                icon={<WebSiteIcon />}
                href={project.url}
              />
            </ToolTipIcon>
          )}
        </div>
      </div>
      <ProjectDesc project={project} />
    </div>
  );
}
