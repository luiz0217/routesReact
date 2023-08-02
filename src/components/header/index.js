import { Link } from "react-router-dom";
import './estilo.css';

function header() {
    return (
        <header>
            <h2>melhor formatura de eng sw 2026</h2>
            <div className="">
                <Link to="/">Home</Link>
                <Link to="/Sobre">Sobre</Link>
                <Link to="/Contato">Contato</Link>
                <Link to="/Produto">Produto</Link>
            </div>
        </header>
    );
}

export default header;