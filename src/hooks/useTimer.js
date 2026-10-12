import { useCallback, useEffect, useRef, useState } from 'react';

// Cuenta regresiva basada en la hora real (no se desfasa si la pestaña queda en segundo plano).
export function useTimer(totalSeconds, onComplete) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [running, setRunning] = useState(false);
  const endRef = useRef(0);
  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => {
      const left = Math.max(0, Math.round((endRef.current - Date.now()) / 1000));
      setRemaining(left);
      if (left === 0) {
        setRunning(false);
        completeRef.current?.();
      }
    }, 250);
    return () => clearInterval(id);
  }, [running]);

  const start = useCallback(() => {
    const from = remaining === 0 ? totalSeconds : remaining;
    setRemaining(from);
    endRef.current = Date.now() + from * 1000;
    setRunning(true);
  }, [remaining, totalSeconds]);

  const pause = useCallback(() => setRunning(false), []);

  const reset = useCallback(() => {
    setRunning(false);
    setRemaining(totalSeconds);
  }, [totalSeconds]);

  return { remaining, running, start, pause, reset };
}
