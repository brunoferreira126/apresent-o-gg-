import FlowSlide from './FlowSlide.jsx';
import MoneyCard from './MoneyCard.jsx';
import StatCard from './StatCard.jsx';
import Timeline from './Timeline.jsx';

function LogoMark() {
  return (
    <div className="logo-mark">
      <img src="/logo-gg.png" alt="GG do Corte" />
    </div>
  );
}

function SlideHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="slide-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {subtitle && <p className="kicker">{subtitle}</p>}
      <h1>{title}</h1>
    </header>
  );
}

function Bullets({ items }) {
  return (
    <div className="bullet-grid">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  );
}

function GoalsForm({ fields }) {
  return (
    <div className="goals-form">
      {fields.map((field) => (
        <label key={field}>
          <span>{field}</span>
          <input aria-label={field} />
        </label>
      ))}
    </div>
  );
}

function ObjectiveSelector({ items }) {
  return (
    <div className="objective-selector">
      {items.map((item) => (
        <label key={item}>
          <input type="checkbox" />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}

function Statement({ slide }) {
  return (
    <div className="statement-lines">
      {slide.lines.map((line, index) => (
        <p className={index === slide.lines.length - 1 ? 'line-accent' : ''} key={line}>
          {line}
        </p>
      ))}
    </div>
  );
}

function Comparison({ slide }) {
  return (
    <>
      <div className="comparison">
        <article>
          <h2>{slide.leftTitle}</h2>
          {slide.left.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
        <article className="is-new">
          <h2>{slide.rightTitle}</h2>
          {slide.right.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
      </div>
      {slide.footer && <p className="footer-line">{slide.footer}</p>}
    </>
  );
}

function renderContent(slide, actions = {}) {
  switch (slide.type) {
    case 'cover':
      return (
        <div className="cover-content">
          {slide.logo && <LogoMark />}
          <span className="eyebrow">{slide.eyebrow}</span>
          <h1>{slide.title}</h1>
          <p>{slide.subtitle}</p>
        </div>
      );
    case 'sequence':
      return (
        <>
          <SlideHeader title={slide.title} />
          <div className="sequence-list">
            {slide.items.map((item, index) => (
              <p className={index === slide.items.length - 1 ? 'is-final' : ''} key={item}>
                {item}
              </p>
            ))}
          </div>
        </>
      );
    case 'stats':
    case 'goal':
      return (
        <>
          <SlideHeader title={slide.title} />
          <div className="stats-grid">
            {slide.stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
          {slide.text && <p className="footer-line">{slide.text}</p>}
        </>
      );
    case 'statement':
    case 'plan':
      return (
        <>
          <SlideHeader title={slide.title} subtitle={slide.subtitle} />
          <Statement slide={slide} />
        </>
      );
    case 'mission':
      return (
        <div className="mission-block">
          <span className="kicker">{slide.subtitle}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
        </div>
      );
    case 'flow':
      return (
        <>
          <SlideHeader title={slide.title} />
          <FlowSlide flow={slide.flow} muted={slide.muted} />
          {slide.footer && <p className="footer-line">{slide.footer}</p>}
        </>
      );
    case 'agenda':
      return (
        <div className="agenda-block">
          <h1>{slide.title}</h1>
          <h2>{slide.subtitle}</h2>
          <Statement slide={slide} />
        </div>
      );
    case 'split':
      return (
        <>
          <SlideHeader eyebrow={slide.eyebrow} title={slide.title} />
          <Timeline items={slide.items} />
        </>
      );
    case 'list':
    case 'daily':
    case 'panel':
      return (
        <>
          <SlideHeader title={slide.title} />
          {slide.intro && <p className="intro-line">{slide.intro}</p>}
          <Bullets items={slide.items} />
          {slide.footer && <p className="footer-line">{slide.footer}</p>}
        </>
      );
    case 'quote':
      return (
        <>
          <SlideHeader title={slide.title} />
          <p className="intro-line">{slide.intro}</p>
          <blockquote>{slide.quote}</blockquote>
          <p className="gold-highlight">{slide.highlight}</p>
        </>
      );
    case 'math':
    case 'money':
      return (
        <>
          <SlideHeader title={slide.title} />
          <MoneyCard rows={slide.rows} highlight={slide.highlight || slide.text} />
        </>
      );
    case 'comparison':
      return (
        <>
          <SlideHeader title={slide.title} />
          <Comparison slide={slide} />
        </>
      );
    case 'value':
      return (
        <>
          <SlideHeader title={slide.title} />
          <div className="value-stack">
            <article>
              <span>Hoje</span>
              <p>{slide.before}</p>
            </article>
            <article className="is-new">
              <span>Nova GG</span>
              <p>{slide.after}</p>
            </article>
          </div>
          <p className="gold-highlight">{slide.highlight}</p>
        </>
      );
    case 'checklist':
      return (
        <>
          <SlideHeader title={slide.title} />
          <div className="checklist">
            {slide.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </>
      );
    case 'goalsForm':
      return (
        <>
          <SlideHeader title={slide.title} />
          <GoalsForm fields={slide.fields} />
          {slide.footer && <p className="footer-line">{slide.footer}</p>}
        </>
      );
    case 'objectiveSelector':
      return (
        <>
          <SlideHeader title={slide.title} />
          {slide.intro && <p className="intro-line">{slide.intro}</p>}
          <ObjectiveSelector items={slide.items} />
        </>
      );
    case 'closing':
      return (
        <div className="closing-block">
          <h1>{slide.title}</h1>
          <p>{slide.subtitle}</p>
        </div>
      );
    case 'final':
      return (
        <div className="final-block">
          {slide.logo && <LogoMark />}
          <h1>{slide.title}</h1>
          <p>{slide.subtitle}</p>
          {slide.action ? (
            <button className="mission-button" onClick={actions.onMissionStart} type="button">
              {slide.text}
            </button>
          ) : (
            <span>{slide.text}</span>
          )}
        </div>
      );
    default:
      return null;
  }
}

export default function Slide({ slide, current, total, onMissionStart }) {
  return (
    <section className={`slide slide-${slide.type}`} key={`${current}-${slide.title}`}>
      <div className="slide-bg" />
      <div className="slide-shell">{renderContent(slide, { onMissionStart })}</div>
      <span className="corner-label">GG 500</span>
      <span className="print-count">
        {current}/{total}
      </span>
    </section>
  );
}
