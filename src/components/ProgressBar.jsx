export default function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="progress" aria-hidden="true">
      <span style={{ width: `${progress}%` }} />
    </div>
  );
}
