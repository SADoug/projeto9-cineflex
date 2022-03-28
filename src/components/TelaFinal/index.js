import { Link } from "react-router-dom";
import "./style.css";

function TelaFinal() {
    return (
        <div className="TelaFinal">
            <div className="titulo">
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className="Conteudo">
                <div className="filmes">
                <p className="">aaaaaa</p>
                <p className="descricao">aaaaaa</p>
                </div>
                <div className="ingressos">
                <p>aaaaaa</p>
                <p>aaaaaa</p>
                </div>
                <div className="comprador">
                   <p>aaaaaa</p>
                   <p>aaaaaa</p>
                </div>
                
                
               <Link to={"/"}> <div className="reserva"><p>Voltar para Home</p></div></Link>
            </div>
        </div>

    )
}
export default TelaFinal;