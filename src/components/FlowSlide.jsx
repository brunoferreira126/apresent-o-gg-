export default function FlowSlide({ flow, muted }) {
  return (
    <div className={`flow ${muted ? 'is-muted' : ''}`}>
      {flow.map((item, index) => (
        <div className="flow-step" key={`${item}-${index}`}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}
