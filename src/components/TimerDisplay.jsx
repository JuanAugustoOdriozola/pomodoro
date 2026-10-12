import { formatTime } from '../utils/format';

export default function TimerDisplay({ remaining, running, onClick }) {
  return (
    <div className={`display ${running ? 'is-running' : ''}`}>
      <time className="time" role="timer" aria-live="off" onClick={onClick}>
        {formatTime(remaining)}
      </time>
    </div>
  );
}