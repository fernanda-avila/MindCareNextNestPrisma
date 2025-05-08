// src/components/ProfessionalsList.tsx
import React from 'react';

const ProfessionalsList: React.FC = () => {
  const professionals = [
    { name: 'Dr. João', specialty: 'Psicologia' },
    { name: 'Dra. Maria', specialty: 'Psiquiatria' },
  ];

  return (
    <section className="professionals-list">
      <h2>Conheça nossos profissionais parceiros!</h2>
      <ul>
        {professionals.map((professional, index) => (
          <li key={index}>
            <h3>{professional.name}</h3>
            <p>{professional.specialty}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProfessionalsList;
