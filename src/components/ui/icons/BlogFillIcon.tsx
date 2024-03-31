import AutoStoriesIcon from '@mui/icons-material/AutoStories';

type Props = {
  fontSize?: number;
  color?: string;
};

export default function BlogFillIcon({
  fontSize = 30,
  color = 'rgba(0, 0, 0, 0.54)',
}: Props) {
  return <AutoStoriesIcon sx={{ fontSize, color }} />;
}
