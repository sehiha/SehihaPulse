import React, { useState } from 'react';

function VitalSignsForm({ onSubmit }) {
  const [vitals, setVitals] = useState({
    temperature: 36.5,
    spo2: 98,
    tension: '120/80'
  });

  const handleChange = e => setVitals({ ...vitals, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(vitals);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>📊 Mesures vitales</h2>
      <label>Température (°C):</label>
      <input name="temperature" type="number" step="0.1" value={vitals.temperature} onChange={handleChange} />

      <label>SPO2 (%):</label>
      <input name="spo2" type="number" value={vitals.spo2} onChange={handleChange} />

      <label>Tension:</label>
      <input name="tension" value={vitals.tension} onChange={handleChange} />

      <br /><br />
      <button type="submit">Analyser ✅</button>
    </form>
  );
}

export default VitalSignsForm;
