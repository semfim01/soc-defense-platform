export default function MetricsCard({
  titulo,
  valor,
}) {
  return (
    <div
      style={{
        background: "#0f172a",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center",
        marginBottom: "10px",
      }}
    >
      <h4>{titulo}</h4>

      <h1>{valor}</h1>
    </div>
  );
}