import { useEffect, useState } from 'react';

export default function AnimatedCounter({
  target = 1000,
  duration = 2000,
}: {
  target: number;
  duration: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentCount = Math.floor(progress * target);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
}
