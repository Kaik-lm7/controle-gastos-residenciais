import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(){

    return (

        <nav>

            <h2>
                Controle de Gastos
            </h2>


            <div>

                <Link to="/">
                    Dashboard
                </Link>


                <Link to="/pessoas">
                    Pessoas
                </Link>


                <Link to="/transacoes">
                    Transações
                </Link>

            </div>

        </nav>

    );
}


export default Navbar;