// src/components/PatientForm.js
import React, { useState } from 'react';

// Le 'onSubmit' est une fonction que nous passerons depuis la page principale
// pour dire au formulaire quoi faire quand on clique sur le bouton.
function PatientForm({ onSubmit }) {
  const [patientId, setPatientId] = useState('');
  const [patientAge, setPatientAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche la page de se recharger
    // On simule des données de santé
    const healthData = {
      temperature: (36.5 + Math.random() * 2).toFixed(1), // Température aléatoire entre 36.5 et 38.5
      heartRate: Math.floor(60 + Math.random() * 40),      // Rythme cardiaque entre 60 et 100
      bloodPressure: `${Math.floor(110 + Math.random() * 20)}/${Math.floor(70 + Math.random() * 15)}`,
    };
    
    // On appelle la fonction onSubmit avec toutes les données
    onSubmit({
      id: patientId,
      age: patientAge,
      scanResults: healthData,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Enregistrer un Patient</h3>
      <div style={{ marginBottom: '10px' }}>
        <label>ID du Patient: </label>
        <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Âge du Patient: </label>
        <input type="number" value={patientAge} onChange={(e) => setPatientAge(e.target.value)} required />
      </div>
      <button type="submit">Lancer le Scan de Santé</button>
    </form>
  );
}

export default PatientForm;