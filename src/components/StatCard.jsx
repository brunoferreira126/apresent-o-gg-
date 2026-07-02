export default function StatCard({ value, label, accent }) {
  return (
    <article className={`stat-card ${accent ? 'is-accent' : ''}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
