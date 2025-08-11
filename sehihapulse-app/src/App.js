// src/App.js
import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import HealthScanResults from './components/HealthScanResults';
import './App.css'; // On garde le fichier CSS pour le style de base

function App() {
  const [scanData, setScanData] = useState(null);
  const [status, setStatus] = useState(''); // Pour afficher le statut de l'envoi

  // Cette fonction est appelée par le formulaire quand il est soumis
  const handleScanSubmit = (data) => {
    console.log("Scan réalisé:", data);
    setScanData(data);
    setStatus(''); // Réinitialise le statut
  };

  // Cette fonction sera appelée quand on cliquera sur le bouton "Transférer"
  const handleDataTransfer = async () => {
    if (!scanData) return;

    setStatus('Préparation des données pour le drone...');
    
    // C'est ici que la magie opère !
    // On envoie les données à notre workflow n8n
    try {
      // REMPLACEZ CETTE URL PAR L'URL DE VOTRE WEBHOOK N8N
      const n8nWebhookUrl = 'https://benquarrouaya.app.n8n.cloud/webhook-test/f70a95a4-fa48-4426-9877-aa196595b89b';

      const response = await fetch(n8nWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scanData),
      });

      if (!response.ok) {
        throw new Error('La connexion avec le serveur a échoué.');
      }

      setStatus('Données transmises au drone avec succès ! En attente de livraison...');
      
      // Simule une confirmation de livraison après quelques secondes
      setTimeout(() => {
        setStatus('Confirmation : Données bien reçues par le centre médical.');
      }, 5000); // 5 secondes pour la simulation du vol

    } catch (error) {
      console.error('Erreur lors du transfert:', error);
      setStatus(`Erreur : ${error.message}`);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Clinique Portable SehihaPulse</h1>
      </header>
      <main style={{ padding: '20px' }}>
        <PatientForm onSubmit={handleScanSubmit} />
        <HealthScanResults data={scanData} onTransfer={handleDataTransfer} />
        {status && (
          <p style={{ marginTop: '20px', fontWeight: 'bold' }}>
            Statut : {status}
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
