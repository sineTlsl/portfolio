import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {
  fontSize?: number;
  color?: string;
};

export default function GithubFillIcon({
  fontSize = 30,
  color = 'rgba(0, 0, 0, 0.54)',
}: Props) {
  return <GitHubIcon sx={{ fontSize, color }} />;
}
