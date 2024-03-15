import { ConnectIcon } from '@/types/icon';

import GithubFillIcon from '@/components/ui/icons/GithubFillIcon';
import BlogFillIcon from '@/components/ui/icons/BlogFillIcon';
import CallFillIcon from '@/components/ui/icons/CallFillIcon';
import EmailFillIcon from '@/components/ui/icons/EmailFillIcon';

export const connectIcon: ConnectIcon[] = [
  {
    nameKr: '깃허브',
    name: 'Github',
    icon: <GithubFillIcon />,
    href: 'https://github.com/sineTlsl',
  },
  {
    nameKr: '기술 블로그',
    name: 'TechBlog',
    icon: <BlogFillIcon />,
    href: 'https://sinetlsl.github.io',
  },
  {
    nameKr: '전화번호',
    name: 'Call',
    icon: <CallFillIcon />,
    copyText: '010-9929-1927',
  },
  {
    nameKr: '이메일',
    name: 'Email',
    icon: <EmailFillIcon />,
    copyText: 'limsieun0313@gmail.com',
  },
];
