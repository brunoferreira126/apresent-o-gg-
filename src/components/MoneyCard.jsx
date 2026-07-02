export default function MoneyCard({ rows, highlight }) {
  return (
    <div className="money-card">
      {rows.map((row) => (
        <div className="money-row" key={row}>
          {row}
        </div>
      ))}
      {highlight && <strong>{highlight}</strong>}
    </div>
  );
}
