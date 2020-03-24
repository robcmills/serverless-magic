import { useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface P {
  children: ReactNode;
}

export function Portal({ children }: P) {
  const mountRef = useRef<HTMLDivElement>(document.createElement('div'));

  useEffect(() => {
    const mountVar = mountRef.current;
    document.body.appendChild(mountVar);
    return () => {
      document.body.removeChild(mountVar);
    };
  }, []);

  return createPortal(children, mountRef.current);
}