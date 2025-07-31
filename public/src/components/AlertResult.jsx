import React from 'react';

function AlertResult({ vitals }) {
  const temp = parseFloat(vitals.temperature);
  const spo2 = parseInt(vitals.spo2);

  let alert = "✅ Patient stable";
  if (temp > 38.5 || spo2 < 92) {
    alert = "🚨 Alerte : État critique détecté !";
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>🧾 Résultat</h2>
      <p>{alert}</p>
    </div>
  );
}

export default AlertResult;
