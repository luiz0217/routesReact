import { Link } from "react-router-dom";

function Homee(){
    return(
        <div>
            <h1>welcome to the home page</h1>
            <span>Luizinho</span>
            <br/>
            <br/>
            <Link to="/Sobre">Sobre</Link>
            <Link to="/Contato">Contato</Link>
            <Link to="/Produto">Produto</Link>

        </div>
    )
}


export default Homee;