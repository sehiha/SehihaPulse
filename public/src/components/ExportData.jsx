import React from 'react';

function ExportData({ patient, vitals }) {
  const handleExport = () => {
    const data = { patient, vitals, timestamp: new Date().toISOString() };
    const file = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(file);
    link.download = `medinapulse_${patient.name}.json`;
    link.click();
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={handleExport}>📤 Exporter les données (Drone)</button>
    </div>
  );
}

export default ExportData;
