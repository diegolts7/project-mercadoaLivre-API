import Cabecalho from "../components/layout/cabeçalho/Cabecalho";
import Footer from "../components/layout/footer/Footer";
import Home from "../components/pages/home/Home";
import Search from "../components/pages/search/Search";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CarrinhoContext } from "../contexts/carrinhoContext/CarrinhoContext";

function App() {
  return (
    <CarrinhoContext>
      <Router>
        <Cabecalho />
        <div className="conteiner">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/search/:busca" element={<Search />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CarrinhoContext>
  );
}

export default App;
