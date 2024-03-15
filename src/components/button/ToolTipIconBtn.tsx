import Link from 'next/link';
import { Tooltip } from '@mui/material';
import { ConnectIcon } from '@/types/icon';

type Props = ConnectIcon & {
  onClick: () => void;
};

export default function ToolTipIconBtn({ name, icon, href, onClick }: Props) {
  return (
    <Tooltip title={name}>
      <button onClick={onClick} aria-label={`${name} 링크`}>
        {href ? <Link href={href}>{icon}</Link> : <>{icon}</>}
      </button>
    </Tooltip>
  );
}
