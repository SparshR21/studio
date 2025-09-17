'use client';
import { useEffect, useState } from 'react';

export function FlamesBackground() {
  const [flames, setFlames] = useState<
    { id: number; style: React.CSSProperties }[]
  >([]);

  useEffect(() => {
    const generateFlames = () => {
      const newFlames = Array.from({ length: 15 }).map((_, i) => {
        const size = Math.random() * 50 + 20; // 20px to 70px
        const animationDuration = Math.random() * 3 + 4; // 4s to 7s
        const animationDelay = Math.random() * 5; // 0s to 5s
        const left = Math.random() * 100; // 0% to 100%

        return {
          id: i,
          style: {
            left: `${left}vw`,
            width: `${size}px`,
            height: `${size * 1.6}px`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
          },
        };
      });
      setFlames(newFlames);
    };

    generateFlames();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {flames.map((flame) => (
        <div key={flame.id} className="flame" style={flame.style}></div>
      ))}
    </div>
  );
}