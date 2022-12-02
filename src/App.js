import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import './adapt2.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect, useRef } from 'react';

function App() {
  const navigate = useNavigate()

  const ref = useRef(null)

  const scroll = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => {
    navigate('/HomePage')
  }, [])

  return (
    <div className="App">
      <div ref={ref}>
        <Header />
      </div>
      <Outlet />
      <div onClick={scroll} className="scroll">
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
