import { useState } from 'react';

export default function Profissionais() {
  const [selectedSpecialty, setSelectedSpecialty] = useState('Todos');
  const [selectedApproach, setSelectedApproach] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProfessional, setSelectedProfessional] = useState(null);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({ date: '', time: '', duration: '30 min' });

  const specialties = ['Todos', 'Psicologia', 'Psiquiatria', 'Terapia', 'Aconselhamento', 'Coaching'];
  const approaches = ['Todos', 'TCC', 'Humanista', 'Psicanálise', 'Gestalt', 'EMDR', 'Mindfulness'];

  const professionals = [
    { id: 1, name: "Dra. Maria Silva", specialty: "Psicóloga Clínica", approach: "TCC e Humanista", expertise: "Questões de gênero e sexualidade, ansiedade, depressão", experience: "8 anos", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.9, reviews: 47, price: "R$ 150/sessão", languages: "Português, Inglês", modality: "Online e Presencial (SP)", lgbtqSpecialized: true },
    { id: 2, name: "Dr. João Santos", specialty: "Psiquiatra", approach: "Medicina Integrativa", expertise: "Saúde mental trans, TH, depressão resistente", experience: "12 anos", photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.8, reviews: 32, price: "R$ 250/consulta", languages: "Português, Espanhol", modality: "Presencial (RJ)", lgbtqSpecialized: true },
    { id: 3, name: "Dra. Ana Costa", specialty: "Psicóloga", approach: "Gestalt e EMDR", expertise: "Trauma, TEPT, população LGBTQIA+", experience: "6 anos", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.7, reviews: 28, price: "R$ 120/sessão", languages: "Português", modality: "Online", lgbtqSpecialized: true },
    { id: 4, name: "Dr. Pedro Almeida", specialty: "Terapeuta", approach: "Humanista e Existencial", expertise: "Jovens LGBTQIA+, coming out, aceitação familiar", experience: "5 anos", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.9, reviews: 39, price: "R$ 130/sessão", languages: "Português, LIBRAS", modality: "Online e Presencial (RS)", lgbtqSpecialized: true },
    { id: 5, name: "Dra. Carla Rodrigues", specialty: "Psicóloga", approach: "Psicanálise e TCC", expertise: "Relações LGBTQIA+, terapia de casal", experience: "10 anos", photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.8, reviews: 56, price: "R$ 160/sessão", languages: "Português, Francês", modality: "Online", lgbtqSpecialized: true },
    { id: 6, name: "Dr. Marcos Oliveira", specialty: "Aconselhador", approach: "Mindfulness e ACT", expertise: "Ansiedade, stress, minorias sexuais", experience: "4 anos", photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.6, reviews: 22, price: "R$ 100/sessão", languages: "Português", modality: "Online", lgbtqSpecialized: true },
    { id: 7, name: "Dra. Juliana Pereira", specialty: "Psicóloga", approach: "TCC", expertise: "Ansiedade, depressão, orientação sexual", experience: "7 anos", photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.9, reviews: 40, price: "R$ 140/sessão", languages: "Português", modality: "Online", lgbtqSpecialized: true },
    { id: 8, name: "Dr. Rafael Lima", specialty: "Psiquiatra", approach: "Psicanálise", expertise: "Depressão, transtorno bipolar", experience: "9 anos", photo: "https://images.unsplash.com/photo-1614281605823-ff6a1c2ed7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.7, reviews: 35, price: "R$ 230/consulta", languages: "Português, Inglês", modality: "Presencial", lgbtqSpecialized: false },
    { id: 9, name: "Dra. Beatriz Santos", specialty: "Psicóloga", approach: "Humanista", expertise: "Trauma, TEPT, ansiedade", experience: "6 anos", photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.8, reviews: 30, price: "R$ 130/sessão", languages: "Português", modality: "Online e Presencial", lgbtqSpecialized: true },
    { id: 10, name: "Dr. Leonardo Costa", specialty: "Aconselhador", approach: "Mindfulness", expertise: "Ansiedade, stress", experience: "5 anos", photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.6, reviews: 20, price: "R$ 110/sessão", languages: "Português", modality: "Online", lgbtqSpecialized: true },
    { id: 11, name: "Dra. Sofia Almeida", specialty: "Psicóloga Clínica", approach: "Gestalt", expertise: "Relacionamentos, ansiedade, LGBTQIA+", experience: "8 anos", photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.9, reviews: 50, price: "R$ 150/sessão", languages: "Português, Inglês", modality: "Online", lgbtqSpecialized: true },
    { id: 12, name: "Dr. Thiago Fernandes", specialty: "Psiquiatra", approach: "TCC", expertise: "Depressão, ansiedade, saúde mental LGBTQIA+", experience: "10 anos", photo: "https://images.unsplash.com/photo-1581090700227-04e5c6e36bdb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80", rating: 4.8, reviews: 42, price: "R$ 240/consulta", languages: "Português", modality: "Presencial e Online", lgbtqSpecialized: true }
  ];

  const filteredProfessionals = professionals.filter(pro => {
    const matchesSpecialty = selectedSpecialty === 'Todos' || pro.specialty.toLowerCase().includes(selectedSpecialty.toLowerCase());
    const matchesApproach = selectedApproach === 'Todos' || pro.approach.toLowerCase().includes(selectedApproach.toLowerCase());
    const matchesSearch = pro.name.toLowerCase().includes(searchTerm.toLowerCase()) || pro.expertise.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecialty && matchesApproach && matchesSearch;
  });

  const openModal = (professional) => {
    setSelectedProfessional(professional);
    setBookingStep(1);
    setBookingData({ date: '', time: '', duration: '30 min' });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const handleNextStep = () => setBookingStep(prev => prev + 1);
  const handlePrevStep = () => setBookingStep(prev => prev - 1);

  return (
    <div className="professionals-page">
      {/* Header */}
      <header className="professionals-header">
        <div className="container">
          <h1>Profissionais</h1>
          <p>Encontre especialistas parceiros do MindCare com foco em questões LGBTQIA+</p>
        </div>
      </header>

      {/* Filtros */}
      <section className="filters-section">
        <div className="container">
          <div className="filters-grid">
            <div className="search-box">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Buscar por nome ou especialidade..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>

            <div className="filter-group">
              <label>Especialidade:</label>
              <select value={selectedSpecialty} onChange={(e) => setSelectedSpecialty(e.target.value)}>
                {specialties.map(spec => <option key={spec} value={spec}>{spec}</option>)}
              </select>
            </div>

            <div className="filter-group">
              <label>Abordagem:</label>
              <select value={selectedApproach} onChange={(e) => setSelectedApproach(e.target.value)}>
                {approaches.map(app => <option key={app} value={app}>{app}</option>)}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de profissionais */}
      <section className="professionals-list">
        <div className="container">
          <div className="results-info">
            <p>{filteredProfessionals.length} profissional{filteredProfessionals.length !== 1 ? 'es' : ''} encontrado{filteredProfessionals.length !== 1 ? 's' : ''}</p>
          </div>
          <div className="professionals-grid">
            {filteredProfessionals.map(pro => (
              <div key={pro.id} className="professional-card">
                <div className="card-header">
                  <img src={pro.photo} alt={pro.name} className="professional-photo"/>
                  <div className="professional-info">
                    <h3>{pro.name}</h3>
                    <span className="specialty">{pro.specialty}</span>
                    <div className="rating">
                      {'★'.repeat(Math.floor(pro.rating))}{'☆'.repeat(5-Math.floor(pro.rating))}
                      <span>({pro.reviews} avaliações)</span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="expertise"><strong>Especialização:</strong> {pro.expertise}</div>
                  <div className="details">
                    <div className="detail-item"><i className="fas fa-clock"></i>{pro.experience} de experiência</div>
                    <div className="detail-item"><i className="fas fa-graduation-cap"></i>{pro.approach}</div>
                    <div className="detail-item"><i className="fas fa-globe"></i>{pro.languages}</div>
                    <div className="detail-item"><i className="fas fa-video"></i>{pro.modality}</div>
                  </div>
                  <div className="lgbtq-badge"><i className="fas fa-rainbow"></i>Especializado em LGBTQIA+</div>
                </div>
                <div className="card-footer">
                  <div className="price">{pro.price}</div>
                  <button className="btn-contact" onClick={() => openModal(pro)}><i className="fas fa-calendar"></i>Agendar Consulta</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contato */}
      <section className="professionals-cta">
        <div className="container">
          <h2>Não encontrou o profissional ideal?</h2>
          <p>Nossa equipe pode ajudar a encontrar o especialista perfeito para suas necessidades</p>
          <div className="cta-buttons">
            <button className="btn-primary"><i className="fas fa-headset"></i>Falar com Nossa Equipe</button>
            <button className="btn-secondary"><i className="fas fa-question-circle"></i>Tirar Dúvidas</button>
          </div>
        </div>
      </section>

      {/* Modal de Agendamento */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <h2>Agendar com {selectedProfessional.name}</h2>
            {bookingStep === 1 && (
              <div>
                <label>Data:</label>
                <input type="date" value={bookingData.date} onChange={(e) => setBookingData({...bookingData, date: e.target.value})}/>
                <label>Hora:</label>
                <input type="time" value={bookingData.time} onChange={(e) => setBookingData({...bookingData, time: e.target.value})}/>
              </div>
            )}
            {bookingStep === 2 && (
              <div>
                <label>Duração:</label>
                <select value={bookingData.duration} onChange={(e) => setBookingData({...bookingData, duration: e.target.value})}>
                  <option value="30 min">30 min</option>
                  <option value="45 min">45 min</option>
                  <option value="60 min">60 min</option>
                </select>
              </div>
            )}
            <div className="modal-buttons">
              {bookingStep > 1 && <button onClick={handlePrevStep}>Voltar</button>}
              {bookingStep < 2 && <button onClick={handleNextStep}>Próximo</button>}
              {bookingStep === 2 && <button onClick={() => { alert('Agendamento concluído!'); closeModal(); }}>Confirmar</button>}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :root {
          --primary: #6d28d9;
          --primary-light: #9333ea;
          --light: #f9f9f9;
          --gray: #d1d5db;
          --text: #374151;
          --dark: #111827;
        }
        .professionals-page { min-height: 100vh; background: var(--light); }
        .professionals-header { background: linear-gradient(135deg,var(--primary),var(--primary-light)); color: white; padding: 80px 0 60px; text-align: center; }
        .professionals-header h1 { font-size: 3rem; margin-bottom: 20px; }
        .professionals-header p { font-size: 1.2rem; opacity: 0.9; }
        .filters-section { padding: 40px 0; background:white; box-shadow:0 2px 20px rgba(0,0,0,0.1); }
        .filters-grid { display:grid; grid-template-columns:2fr 1fr 1fr; gap:20px; align-items:end; }
        .search-box { position:relative; }
        .search-box i { position:absolute; left:15px; top:50%; transform:translateY(-50%); color:var(--text); }
        .search-box input { width:100%; padding:12px 15px 12px 45px; border:2px solid var(--gray); border-radius:8px; font-size:1rem; }
        .filter-group label { display:block; margin-bottom:8px; font-weight:600; color:var(--dark); }
        .filter-group select { width:100%; padding:12px; border:2px solid var(--gray); border-radius:8px; background:white; }
        .professionals-list { padding:60px 0; }
        .results-info { margin-bottom:30px; }
        .professionals-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(400px,1fr)); gap:30px; }
        .professional-card { background:white; border-radius:16px; padding:25px; box-shadow:0 5px 20px rgba(0,0,0,0.08); transition:transform 0.3s,box-shadow 0.3s; }
        .professional-card:hover { transform:translateY(-5px); box-shadow:0 15px 35px rgba(0,0,0,0.12); }
        .card-header { display:flex; gap:20px; margin-bottom:20px; }
        .professional-photo { width:80px; height:80px; border-radius:50%; object-fit:cover; }
        .professional-info h3 { margin:0 0 5px 0; color:var(--dark); }
        .specialty { color:var(--primary); font-weight:600; display:block; margin-bottom:8px; }
        .rating { display:flex; align-items:center; gap:5px; font-size:0.9rem; color:#FFB800; }
        .card-body { margin-bottom:20px; }
        .expertise { font-size:0.95rem; margin-bottom:12px; color:var(--text); }
        .details { display:flex; flex-wrap:wrap; gap:15px; color:var(--text); font-size:0.9rem; }
        .detail-item i { margin-right:5px; color:var(--primary); }
        .lgbtq-badge { margin-top:12px; color:#D946EF; font-weight:600; display:inline-flex; align-items:center; gap:5px; }
        .card-footer { display:flex; justify-content:space-between; align-items:center; }
        .price { font-weight:700; color:var(--dark); }
        .btn-contact { background: linear-gradient(135deg,var(--primary),var(--primary-light)); color:white; border:none; padding:12px 20px; border-radius:12px; font-weight:600; cursor:pointer; transition:opacity 0.3s; display:flex; align-items:center; gap:8px; }
        .btn-contact:hover { opacity:0.9; }
        .professionals-cta { background:var(--gray); padding:80px 0; text-align:center; }
        .professionals-cta h2 { font-size:2.5rem; margin-bottom:20px; color:var(--dark); }
        .professionals-cta p { font-size:1.1rem; margin-bottom:30px; color:var(--text); }
        .cta-buttons { display:flex; gap:20px; justify-content:center; }
        .btn-primary, .btn-secondary { padding:15px 30px; border-radius:8px; font-weight:600; display:flex; align-items:center; gap:10px; cursor:pointer; transition:all 0.3s; }
        .btn-primary { background: linear-gradient(135deg,var(--primary),var(--primary-light)); color:white; border:none; }
        .btn-secondary { background:transparent; color:var(--primary); border:2px solid var(--primary); }
        .btn-primary:hover, .btn-secondary:hover { transform:translateY(-2px); }
        .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.4); display:flex; justify-content:center; align-items:center; z-index:100; }
        .modal { background:white; padding:40px; border-radius:16px; width:400px; position:relative; box-shadow:0 10px 40px rgba(0,0,0,0.2); }
        .modal h2 { margin-top:0; color:var(--primary); }
        .modal-close { position:absolute; top:15px; right:20px; background:transparent; border:none; font-size:1.5rem; cursor:pointer; color:var(--dark); }
        .modal input, .modal select { width:100%; padding:10px; margin:10px 0 20px 0; border-radius:8px; border:2px solid var(--gray); }
        .modal-buttons { display:flex; justify-content:space-between; }
        @media (max-width:768px) {
          .filters-grid { grid-template-columns:1fr; }
          .professionals-grid { grid-template-columns:1fr; }
          .card-header { flex-direction:column; text-align:center; }
          .professional-photo { align-self:center; }
          .cta-buttons { flex-direction:column; }
          .professionals-header h1 { font-size:2.2rem; }
        }
      `}</style>
    </div>
  );
}
