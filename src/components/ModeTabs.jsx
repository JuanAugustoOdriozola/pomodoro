export default function ModeTabs({ modes, activeId, counts, onChange }) {
  return (
    <div className="tabs" role="tablist" aria-label="Tipo de sesión">
      {modes.map((m) => (
        <button
          key={m.id}
          role="tab"
          aria-selected={m.id === activeId}
          className={`tab ${m.id === activeId ? 'is-active' : ''}`}
          data-kind={m.kind}
          onClick={() => onChange(m.id)}
        >
          <span>{m.label}</span>
          <span className="tab-min">{m.minutes} min</span>
          {counts[m.id] > 0 && <span className="tab-count">{counts[m.id]}</span>}
        </button>
      ))}
    </div>
  );
}
