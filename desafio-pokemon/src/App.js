import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pokemon from './components/pokemon';
import Home from './view/home';
import Pokemones from './view/pokemones';



function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar />

    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones/:id" element={<Pokemon />} />
          <Route path="/pokemones" element={<Pokemones />} />
    </Routes>

    </BrowserRouter>

    </div>
  );
}

export default App;
