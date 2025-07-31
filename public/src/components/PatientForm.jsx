
import React, { useState } from 'react';

function PatientForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', age: '', sex: '', location: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>🧍 Ajouter un patient</h2>
      <input name="name" placeholder="Nom" onChange={handleChange} required />
      <input name="age" placeholder="Âge" type="number" onChange={handleChange} required />
      <select name="sex" onChange={handleChange} required>
        <option value="">Sexe</option>
        <option value="F">Femme</option>
        <option value="M">Homme</option>
      </select>
      <input name="location" placeholder="Localisation" onChange={handleChange} required />
      <br /><br />
      <button type="submit">Suivant ➡️</button>
    </form>
  );
}

export default PatientForm;
