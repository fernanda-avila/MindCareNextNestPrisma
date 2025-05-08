
import React, { useEffect, useState } from 'react';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import { listarPlanos } from './components/Services'; 
const HomeAfterLogin: React.FC = () => {
  const [planos, setPlanos] = useState<{ id: number, nome: string, descricao: string, preco: string }[]>([]);

 
  useEffect(() => {
    const fetchPlanos = async () => {
      try {
        const planosFetched = await listarPlanos();  
        setPlanos(planosFetched);  
      } catch (error) {
        console.error("Erro ao carregar os planos:", error);
      }
    };
    
    fetchPlanos();
  }, []);

  return (
    <div>
      <Navbar />
      
      <div className="container">
        <h1>Planos</h1>
        <ul>
          {planos.map((plano) => (
            <li key={plano.id}>
              <h2>{plano.nome}</h2>
              <p>{plano.descricao}</p>
              <p>{plano.preco}</p>
            </li>
          ))}
        </ul>
      </div>
      
  
      
      <Footer />
    </div>
  );
}

export default HomeAfterLogin;
