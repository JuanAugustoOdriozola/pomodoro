export default function Controls({ running, finished, onStart, onPause, onReset }) {
  return (
    <div className="controls">
      <button className="btn-main" onClick={running ? onPause : onStart}>
        {running ? 'Pausar' : finished ? 'Reiniciar' : 'Comenzar'}
      </button>
      <button className="btn-round" onClick={onReset} aria-label="Reiniciar temporizador" title="Reiniciar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12a9 9 0 1 0 3-6.7" />
          <path d="M3 4v5h5" />
        </svg>
      </button>
    </div>
  );
}
