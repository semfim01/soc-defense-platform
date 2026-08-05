export default function LoginPanel() {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>🏪 Mercado</h2>

      <p>Status:</p>

      <span
        style={{
          color: "#22c55e",
        }}
      >
        ● Sistema Online
      </span>

      <br />
      <br />

      <input
        placeholder="Usuário"
        style={{
          width: "80%",
          padding: "10px",
          marginBottom: "10px",
        }}
      />

      <input
        placeholder="Senha"
        type="password"
        style={{
          width: "80%",
          padding: "10px",
        }}
      />

      <br />
      <br />

      <button>
        Entrar
      </button>
    </div>
  );
}