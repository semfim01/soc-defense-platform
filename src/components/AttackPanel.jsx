export default function AttackPanel({
  ataqueRodando,
  tentativas,
  iniciarAtaque,
}) {
  const senhas = [
    "admin123",
    "gerente2026",
    "mercado123",
    "empresa2026",
    "supermercado01",
  ];

  const senhaAtual =
    senhas[
      tentativas %
      senhas.length
    ];

  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>⚠️ Attack Lab</h2>

      <p>
        <b>IP:</b>
      </p>

      <p>189.10.15.22</p>

      <p>
        <b>Conta:</b>
      </p>

      <p>gerente@gmail.com</p>

      <p>
        <b>Senha Atual:</b>
      </p>

      <div
        style={{
          background: "#0f172a",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {senhaAtual}
      </div>

      <br />

      <p>
        Tentativa:
        {" "}
        {tentativas}
      </p>

      <p>
        {ataqueRodando
          ? "🔴 EXECUTANDO"
          : "🟢 PARADO"}
      </p>

      <button
        onClick={iniciarAtaque}
      >
        🚀 Iniciar
      </button>
    </div>
  );
}