import { useEffect, useMemo, useState } from 'react';
import { slides } from './slides.js';
import Slide from './components/Slide.jsx';
import ProgressBar from './components/ProgressBar.jsx';
import Navigation from './components/Navigation.jsx';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

export default function App() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const currentSlide = slides[index];

  const controls = useMemo(
    () => ({
      next: () => setIndex((current) => clamp(current + 1, 0, total - 1)),
      prev: () => setIndex((current) => clamp(current - 1, 0, total - 1)),
      goTo: (target) => setIndex(clamp(target, 0, total - 1))
    }),
    [total]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (['ArrowRight', 'PageDown', ' '].includes(event.key)) {
        event.preventDefault();
        controls.next();
      }

      if (['ArrowLeft', 'PageUp'].includes(event.key)) {
        event.preventDefault();
        controls.prev();
      }

      if (event.key === 'Home') controls.goTo(0);
      if (event.key === 'End') controls.goTo(total - 1);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [controls, total]);

  return (
    <main className="deck" aria-live="polite">
      <ProgressBar current={index + 1} total={total} />
      <Slide slide={currentSlide} current={index + 1} total={total} />
      <Navigation
        current={index + 1}
        total={total}
        onNext={controls.next}
        onPrev={controls.prev}
        canPrev={index > 0}
        canNext={index < total - 1}
      />
    </main>
  );
}
