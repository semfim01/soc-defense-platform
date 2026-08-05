import { useState } from "react";

import Header from "./components/Header";
import LoginPanel from "./components/LoginPanel";
import AttackPanel from "./components/AttackPanel";
import SocPanel from "./components/SocPanel";

function App() {
  const [mfa, setMfa] =
    useState(true);

  const [lockout, setLockout] =
    useState(true);

  const [rateLimit, setRateLimit] =
    useState(true);

  const [tentativas, setTentativas] =
    useState(0);

  const [eventos, setEventos] =
    useState([]);

  const [bloqueada, setBloqueada] =
    useState(false);

  const [ataqueRodando, setAtaqueRodando] =
    useState(false);

  function iniciarAtaque() {
    setAtaqueRodando(true);

    let contador =
      tentativas;

    const timer = setInterval(() => {
      contador++;

      setTentativas(contador);

      setEventos((lista) => [
        ...lista,
        `${new Date().toLocaleTimeString()} - Tentativa #${contador}`,
      ]);

      if (
        lockout &&
        contador >= 5
      ) {
        setBloqueada(true);

        setEventos((lista) => [
          ...lista,
          "🔴 Lockout acionado",
        ]);

        setAtaqueRodando(false);

        clearInterval(timer);
      }
    }, 1000);
  }

  function bloquearAtaque() {
    setBloqueada(true);

    setAtaqueRodando(false);

    setEventos((lista) => [
      ...lista,
      "🚫 Analista bloqueou usuário",
    ]);
  }

  return (
    <div
      style={{
        background: "#020617",
        minHeight: "100vh",
        color: "white",
        padding: "20px",
      }}
    >
      <Header />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr 1fr",
          gap: "20px",
        }}
      >
        <LoginPanel />

        <AttackPanel
          ataqueRodando={
            ataqueRodando
          }
          tentativas={
            tentativas
          }
          iniciarAtaque={
            iniciarAtaque
          }
        />

        <SocPanel
          tentativas={
            tentativas
          }
          eventos={eventos}
          bloqueada={
            bloqueada
          }
          mfa={mfa}
          lockout={lockout}
          rateLimit={rateLimit}
          setMfa={setMfa}
          setLockout={
            setLockout
          }
          setRateLimit={
            setRateLimit
          }
          bloquearAtaque={
            bloquearAtaque
          }
        />
      </div>
    </div>
  );
}

export default App;
