'use client';

import React, { useEffect, useRef, useState } from 'react';

type Trail = { x: number; y: number; id: string };

export default function CustomCursor() {
  const [mouse, setMouse] = useState({ x: -100, y: -100 }); // start off-screen
  const [trails, setTrails] = useState<Trail[]>([]);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const frameRequestedRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  // id generator: crypto.randomUUID if available, otherwise fallback
  const genId = () =>
    typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? (crypto as { randomUUID: () => string }).randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      // update main cursor position immediately for responsiveness
      setMouse({ x: e.clientX, y: e.clientY });

      // batch trail additions via RAF to avoid too many setState calls
      if (!frameRequestedRef.current) {
        frameRequestedRef.current = true;
        rafIdRef.current = requestAnimationFrame(() => {
          frameRequestedRef.current = false;
          const pos = lastPosRef.current;
          const newTrail: Trail = { x: pos.x, y: pos.y, id: genId() };
          setTrails((prev) => {
            const updated = [newTrail, ...prev];
            return updated.slice(0, 12); // keep last 12 points
          });
        });
      }
    }

    function handleLeave() {
      // hide cursor when leaving window (optional)
      setMouse({ x: -100, y: -100 });
    }

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseleave', handleLeave);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        aria-hidden
        style={{
          left: mouse.x,
          top: mouse.y,
          transform: 'translate(-50%, -50%)',
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '2px solid rgba(0,255,255,0.95)',
          boxShadow: '0 0 18px rgba(0,255,255,0.12)',
          transition: 'transform 0.06s linear',
        }}
      />

      {/* Trail */}
      {trails.map((t, idx) => {
        const opacity = Math.max(0, 1 - idx / 12); // fade out
        const scale = Math.max(0.3, 1 - idx / 14);
        return (
          <div
            key={t.id}
            aria-hidden
            style={{
              left: t.x,
              top: t.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 9998,
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'rgba(0,255,255,0.85)',
              filter: 'blur(6px)',
              opacity,
              transition: 'all 120ms linear',
            }}
          />
        );
      })}
    </>
  );
}
