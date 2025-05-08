"use client"
import React, { useState } from 'react';
import styles from './bookingForm.module.css';

const professionals = [
  {
    id: 1,
    name: 'Dr. João Silva',
    specialty: 'Psicologia Cognitivo-Comportamental',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    experience: '10 anos de experiência',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Dra. Ana Costa',
    specialty: 'Psicologia Gestalt',
    photo: 'https://randomuser.me/api/portraits/women/12.jpg',
    experience: '5 anos de experiência',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Dr. Pedro Almeida',
    specialty: 'Psicologia Analítica',
    photo: 'https://randomuser.me/api/portraits/men/15.jpg',
    experience: '8 anos de experiência',
    rating: 4.7,
  },
];

const BookingForm: React.FC = () => {
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSelectProfessional = (professional: any) => {
    setSelectedProfessional(professional);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProfessional(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de agendamento aqui
    console.log('Consulta agendada com', selectedProfessional.name);
  };

  return (
    <section className={styles.formContainer}>
      <h2 className={styles.header}>Agendar Consulta</h2>
      <p className={styles.headerDescription}>
        Escolha um psicólogo ou psicóloga e agende sua consulta online com facilidade. 
        <p className={styles.headerDescription}>Preencha os dados e tenha um atendimento especializado.</p>
      </p>

      {/* Lista de Psicólogos e Psicólogas */}
      <div className={styles.professionalList}>
        {professionals.map((professional) => (
          <div
            key={professional.id}
            className={styles.card}
            onClick={() => handleSelectProfessional(professional)}
          >
            <img
              src={professional.photo}
              alt={professional.name}
              className={styles.photo}
            />
            <div className={styles.cardInfo}>
              <h3>{professional.name}</h3>
              <p>{professional.specialty}</p>
              <p>{professional.experience}</p>
              <p>⭐ {professional.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para agendamento */}
      {showModal && selectedProfessional && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3>Agendar consulta com {selectedProfessional.name}</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Data:</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div>
                <label>Hora:</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={styles.input}
                />
              </div>
              <div>
                <label>Duração:</label>
                <select className={styles.input}>
                  <option value="30">30 minutos</option>
                  <option value="60">60 minutos</option>
                </select>
              </div>
              <button type="submit" className={styles.button}>Confirmar Agendamento</button>
            </form>
            <button onClick={handleCloseModal} className={styles.closeButton}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookingForm;
