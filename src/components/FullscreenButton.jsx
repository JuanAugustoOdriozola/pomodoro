import { useFullscreen } from '../hooks/useFullscreen';

export default function FullscreenButton() {
  const { isFullscreen, toggle } = useFullscreen();

  // Si el navegador no soporta pantalla completa, no se muestra el botón
  if (!document.fullscreenEnabled) return null;

  const label = isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa';

  return (
    <button className="btn-round btn-small" onClick={toggle} aria-label={label} title={label}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {isFullscreen ? (
          <path d="M8 3v3a2 2 0 0 1-2 2H3 M21 8h-3a2 2 0 0 1-2-2V3 M3 16h3a2 2 0 0 1 2 2v3 M16 21v-3a2 2 0 0 1 2-2h3" />
        ) : (
          <path d="M8 3H5a2 2 0 0 0-2 2v3 M21 8V5a2 2 0 0 0-2-2h-3 M3 16v3a2 2 0 0 0 2 2h3 M16 21h3a2 2 0 0 0 2-2v-3" />
        )}
      </svg>
    </button>
  );
}