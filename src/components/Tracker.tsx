import { ChevronsLeftRight } from 'lucide-react';
import { memo } from 'react';

const Tracker = memo(
  ({
    mousePosition,
    isOverSlider,
  }: {
    mousePosition: { x: number; y: number };
    isOverSlider: boolean;
  }) => {
    return (
      <div
        className={`fixed ${
          isOverSlider ? 'hidden' : 'md:flex'
        } rounded-full mix-blend-difference z-[9999] hidden w-3.5 h-3.5 bg-white justify-center`}
        style={{
          transform: `translate3d(${mousePosition.x - 25}px, ${
            mousePosition.y - 25
          }px, 0)`,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)',
          willChange: 'transform',
          pointerEvents: 'none',
        }}
      >
        {isOverSlider && <ChevronsLeftRight size={32} />}
      </div>
    );
  }
);

export default Tracker;
