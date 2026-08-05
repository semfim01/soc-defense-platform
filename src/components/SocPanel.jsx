import MetricsCard from "./MetricsCard";
import SecurityPanel from "./SecurityPanel";
import EventLog from "./EventLog";

export default function SocPanel({
  tentativas,
  eventos,
  bloqueada,
  mfa,
  lockout,
  rateLimit,
  setMfa,
  setLockout,
  setRateLimit,
  bloquearAtaque,
}) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>🛡️ SOC Center</h2>

      <MetricsCard
        titulo="Tentativas"
        valor={tentativas}
      />

      {bloqueada && (
        <h3
          style={{
            color: "red",
          }}
        >
          CONTA BLOQUEADA
        </h3>
      )}

      <SecurityPanel
        mfa={mfa}
        lockout={lockout}
        rateLimit={rateLimit}
        setMfa={setMfa}
        setLockout={setLockout}
        setRateLimit={setRateLimit}
      />

      <hr />

      <button
        onClick={
          bloquearAtaque
        }
      >
        🚫 Bloquear Usuário
      </button>

      <hr />

      <EventLog eventos={eventos} />
    </div>
  );
}