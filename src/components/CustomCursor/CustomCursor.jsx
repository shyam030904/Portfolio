import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  useEffect(() => {
    const dot = cursorDot.current;
    const ring = cursorRing.current;
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let animFrame;

    const moveCursor = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
      dot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    };

    const animateRing = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      animFrame = requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      ring.classList.add('hovering');
      dot.classList.add('hovering');
    };
    const handleMouseLeave = () => {
      ring.classList.remove('hovering');
      dot.classList.remove('hovering');
    };

    window.addEventListener('mousemove', moveCursor);
    animFrame = requestAnimationFrame(animateRing);

    document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-ring" ref={cursorRing} />
    </>
  );
}
