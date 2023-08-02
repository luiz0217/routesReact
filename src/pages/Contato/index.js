import { Link } from "react-router-dom";

function Contato() {
    return (
        <div>
            <h1>Contato</h1>
            <span>(dd)xxxxxxx-xxxxx</span>
            <Link to="/">Home</Link>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/Produto">Produto</Link>
        </div>
    );
}

export default Contato;