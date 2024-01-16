import './App.css';
import styled from 'styled-components';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  return (
    <ContainerMain className="app">
      <Header />
      <Navbar />
      <Footer />
    </ContainerMain>
  );
}

export default App;

const ContainerMain = styled.div`
  margin: none;
`;
