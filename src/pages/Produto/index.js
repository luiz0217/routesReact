import { Link } from "react-router-dom";

function Produto() {
    return (
        <div>
            <h1>Página sobre o Produto</h1>

            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/Produto">Produto</Link>
        </div>
    );
}

export default Produto;