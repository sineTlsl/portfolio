import { ConnectIcon } from '@/types/icon';
import Link from 'next/link';

type Props = ConnectIcon & {
  onClick?: () => void;
};

export default function ConnectIconBtn({ name, icon, href, onClick }: Props) {
  return (
    <button onClick={onClick} aria-label={`${name}`}>
      {href ? <Link href={href}>{icon}</Link> : <>{icon}</>}
    </button>
  );
}
