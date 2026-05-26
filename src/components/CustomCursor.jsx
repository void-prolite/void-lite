import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hoverType, setHoverType] = useState('none'); // 'none', 'card', 'button'
  const [hidden, setHidden] = useState(true);
  
  const ringRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check if device is mobile/tablet (has touch screen)
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    if (isMobile) {
      setHidden(true);
      return;
    }

    setHidden(false);

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({ x, y });
      mouseRef.current = { x, y };
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    // Smooth trailing effect using lerp
    let animFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      if (ringRef.current) {
        ringPosRef.current.x = lerp(ringPosRef.current.x, mouseRef.current.x, 0.12);
        ringPosRef.current.y = lerp(ringPosRef.current.y, mouseRef.current.y, 0.12);
        
        ringRef.current.style.transform = `translate3d(${ringPosRef.current.x}px, ${ringPosRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    animFrameId = requestAnimationFrame(render);

    // Dynamic hover detection for link and card elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      // Check if target or parent is a project card / clickable item
      const isCard = target.closest('.project-card-interactive');
      const isButton = target.closest('a, button, .btn-interactive, [role="button"]');

      if (isCard) {
        setHoverType('card');
      } else if (isButton) {
        setHoverType('button');
      } else {
        setHoverType('none');
      }
    };

    const handleMouseOut = () => {
      setHoverType('none');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Inner small dot */}
      <div 
        className={`custom-cursor ${
          hoverType === 'card' ? 'hovered' : hoverType === 'button' ? 'button-hovered' : ''
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Outer trailing ring */}
      <div 
        ref={ringRef}
        className={`custom-cursor-ring ${
          hoverType === 'card' ? 'hovered' : hoverType === 'button' ? 'button-hovered' : ''
        }`}
      />
    </>
  );
};

export default CustomCursor;
