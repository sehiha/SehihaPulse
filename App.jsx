import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import VitalSignsForm from './components/VitalSignsForm';
import AlertResult from './components/AlertResult';
import ExportData from './components/ExportData';

function App() {
  const [patient, setPatient] = useState(null);
  const [vitals, setVitals] = useState(null);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🩺 MedinaPulse</h1>
      {!patient ? (
        <PatientForm onSubmit={setPatient} />
      ) : !vitals ? (
        <VitalSignsForm onSubmit={setVitals} />
      ) : (
        <>
          <AlertResult vitals={vitals} />
          <ExportData patient={patient} vitals={vitals} />
        </>
      )}
    </div>
  );
}

export default App;
