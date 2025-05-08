
import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import Benefits from './components/Benefits/page';
import Planos from './components/Plans/Plans'

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Benefits />
      <Planos />
      <Footer />

    </div>
  );
}

export default Home;
