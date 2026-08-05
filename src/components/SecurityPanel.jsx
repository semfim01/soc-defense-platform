export default function SecurityPanel({
  mfa,
  lockout,
  rateLimit,
  setMfa,
  setLockout,
  setRateLimit,
}) {
  return (
    <div>
      <h3>⚙️ Segurança</h3>

      <p>
        <input
          type="checkbox"
          checked={mfa}
          onChange={() =>
            setMfa(!mfa)
          }
        />
        MFA
      </p>

      <p>
        <input
          type="checkbox"
          checked={lockout}
          onChange={() =>
            setLockout(!lockout)
          }
        />
        Lockout
      </p>

      <p>
        <input
          type="checkbox"
          checked={rateLimit}
          onChange={() =>
            setRateLimit(!rateLimit)
          }
        />
        Rate Limit
      </p>
    </div>
  );
}