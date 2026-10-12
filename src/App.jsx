import { useEffect, useState } from 'react';
import { MODES } from './constants/modes';
import ModeTabs from './components/ModeTabs';
import Timer from './components/Timer';
import FullscreenButton from './components/FullscreenButton';

export default function App() {
  const [activeId, setActiveId] = useState('focus-25');
  const [counts, setCounts] = useState({});
  const [expanded, setExpanded] = useState(false);
  const mode = MODES.find((m) => m.id === activeId);

  // Esc = volver al tamaño normal
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setExpanded(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleComplete = (id) => setCounts((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  return (
    <div className={`app ${expanded ? 'is-expanded' : ''}`} data-kind={mode.kind}>
      <header className="brand">
        <span>Te amo gordita</span>
        <FullscreenButton />
      </header>
      <main className="stage">
        <ModeTabs modes={MODES} activeId={activeId} counts={counts} onChange={setActiveId} />
        <Timer
          key={mode.id}
          mode={mode}
          onComplete={handleComplete}
          onExpand={() => setExpanded(true)}
          onCollapse={() => setExpanded(false)}
        />
      </main>
    </div>
  );
}