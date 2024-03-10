import { motion, useScroll } from 'framer-motion';

export default function ScrollYProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '5px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        scaleX: scrollYProgress,
        transformOrigin: '0% 0%',
      }}
    />
  );
}
