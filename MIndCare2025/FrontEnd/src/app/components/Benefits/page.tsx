"use client";
import React, { useState } from 'react';
import styles from './benefit.module.css';

// Ícones com cores específicas
import { FaComment, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Benefits: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const benefits = [
    {
      title: 'Chat com Colaborador',
      description: 'Converse com colaboradores a qualquer momento e receba suporte imediato.',
      icon: <FaComment className={styles.greenIcon} />, // Ícone verde
    },
    {
      title: 'Profissionais Parceiros',
      description: 'Acesso a uma rede de profissionais especializados em saúde mental.',
      icon: <FaUsers className={styles.redIcon} />, // Ícone vermelho
    },
    {
      title: 'Agendamento Flexível',
      description: 'Agende suas consultas conforme sua disponibilidade, com flexibilidade total.',
      icon: <FaCalendarAlt className={styles.orangeIcon} />, // Ícone laranja
    },
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        {/* Imagem à esquerda */}
        <div className={styles.imageContainer}>
          <img
            src="./sideimg.jpg"
            alt="Imagem ilustrativa"
            className={styles.image}
          />
          <div className={styles.sessionReminder}>
            <p>Saiba mais sobre o que o MindCare pode oferecer!</p>
          </div>
        </div>

        {/* Título, descrição e cards de benefícios à direita */}
        <div className={styles.textContainer}>
          <div className={styles.tagline}>
            MindCare: O caminho para um bem-estar mental completo.
          </div>
          <h2 className={styles.mainTitle}>O que o MindCare pode fazer por você? Venha descobrir.</h2>
          <p className={styles.description}>
            Conheça as vantagens que a nossa plataforma oferece para garantir o seu bem-estar.
          </p>

          {/* Cards de Benefícios */}
          <div className={styles.cardsContainer}>
            {benefits.map((item, index) => (
              <div
                key={index}
                className={`${styles.card} ${hoveredItem === index ? styles.cardHovered : ''}`}
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={styles.cardIcon}>
                  {item.icon} {/* Ícone */}
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                {hoveredItem === index && (
                  <p className={styles.cardDescription}>{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
