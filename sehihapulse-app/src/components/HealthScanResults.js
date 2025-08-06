// src/components/HealthScanResults.js
import React from 'react';

function HealthScanResults({ data, onTransfer }) {
  // S'il n'y a pas de données, on n'affiche rien.
  if (!data) return null;

  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #007BFF', borderRadius: '8px' }}>
      <h3>Résultats du Scan pour le patient {data.id}</h3>
      <p><strong>Température:</strong> {data.scanResults.temperature} °C</p>
      <p><strong>Rythme Cardiaque:</strong> {data.scanResults.heartRate} bpm</p>
      <p><strong>Tension Artérielle:</strong> {data.scanResults.bloodPressure}</p>
      <button onClick={onTransfer} style={{ marginTop: '15px', backgroundColor: '#28a745', color: 'white' }}>
        Transférer les données au centre médical
      </button>
    </div>
  );
}

export default HealthScanResults;