export default function Navigation({ current, total, onNext, onPrev, canPrev, canNext }) {
  return (
    <nav className="navigation" aria-label="Navegação da apresentação">
      <button className="nav-button" onClick={onPrev} disabled={!canPrev} aria-label="Slide anterior" title="Anterior">
        ‹
      </button>
      <span className="slide-count">
        {String(current).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>
      <button className="nav-button" onClick={onNext} disabled={!canNext} aria-label="Próximo slide" title="Próximo">
        ›
      </button>
    </nav>
  );
}
