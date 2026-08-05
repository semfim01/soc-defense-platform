export default function EventLog({
  eventos,
}) {
  return (
    <div>
      <h3>📋 Timeline SIEM</h3>

      <div
        style={{
          background: "#0f172a",
          padding: "10px",
          maxHeight: "250px",
          overflowY: "auto",
          borderRadius: "10px",
        }}
      >
        {eventos.length === 0 && (
          <p>Nenhum evento registrado.</p>
        )}

        {eventos.map((evento, index) => (
          <p key={index}>
            {evento}
          </p>
        ))}
      </div>
    </div>
  );
}