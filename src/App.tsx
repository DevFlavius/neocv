import './index.css';
import {
  Header,
  Hero,
  About,
  Equipments,
  Services,
  Portfolio,
  Clients,
  Contact,
  Footer,
  WhatsAppButton
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Equipments />
        <Services />
        <Portfolio />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
