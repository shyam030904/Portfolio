import { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef([]);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + 'px';
      dot.style.top  = mouseY + 'px';

      // Spawn trail particle
      spawnTrail(mouseX, mouseY);
    };

    const spawnTrail = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-trail-particle';
      particle.style.left = x + 'px';
      particle.style.top  = y + 'px';
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 500);
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
      raf = requestAnimationFrame(animate);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp   = () => setClicking(false);

    const onEnter = () => {
      ring.classList.add('hovering');
      dot.classList.add('hovering');
    };
    const onLeave = () => {
      ring.classList.remove('hovering');
      dot.classList.remove('hovering');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup',   onMouseUp);
    raf = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll('a, button, [data-cursor="hover"]');
    interactables.forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup',   onMouseUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot  ${clicking ? 'clicking' : ''}`} />
      <div ref={ringRef} className={`cursor-ring ${clicking ? 'clicking' : ''}`} />
    </>
  );
}
