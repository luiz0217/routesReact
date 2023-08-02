import { Link } from "react-router-dom";

function Erro() {
    return (
        <div>
            <h1>404 Not Foud</h1>

            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/Produto">Produto</Link>
        </div>
    );
}

export default Erro;