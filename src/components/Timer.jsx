import { useEffect } from 'react';
import { useTimer } from '../hooks/useTimer';
import { formatTime } from '../utils/format';
import { beep } from '../utils/beep';
 import TimerDisplay from './TimerDisplay';
import Controls from './Controls';

export default function Timer({ mode, onComplete, onExpand, onCollapse }) {
  const total = mode.minutes * 60;
  const { remaining, running, start, pause, reset } = useTimer(total, () => {
    beep();
    onComplete(mode.id);
  });

  // Título de la pestaña con el tiempo restante
  useEffect(() => {
    document.title =
      running || remaining !== total
        ? `${formatTime(remaining)} · ${mode.label}`
        : 'Temporizador Pomodoro';
  }, [remaining, running, total, mode.label]);

  // Barra espaciadora = comenzar / pausar
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        running ? pause() : start();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [running, start, pause]);

 return (
  <div className="clock" onMouseEnter={onExpand}>
    <TimerDisplay
  remaining={remaining}
  running={running}
  onClick={onCollapse}
/>
    <Controls
      running={running}
      finished={remaining === 0}
      onStart={start}
      onPause={pause}
      onReset={reset}
    />
  </div>
);
}
