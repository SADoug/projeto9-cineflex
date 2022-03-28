import { Link, useLocation } from "react-router-dom";
import "./style.css";


function TelaFinal() {

    const location = useLocation()
    const {nome, cpf, titulo, datas, horario} = location.state
    
    console.log(datas)
    console.log(horario)

    return (
        <div className="TelaFinal">
            <div className="titulo">
                <h1>Pedido feito com sucesso!</h1>
            </div>
            <div className="Conteudo">
                <div className="filmes">
                <p className="titulo">Filmes e sessão </p>
                <p className="descricao">{titulo}</p>
                <p className="descricao">{datas.data.date} - {horario.elemento.data}</p>
                </div>
                <div className="ingressos">
                <p className="titulo">Ingressos</p>
                <p className="descricao">aaaaaa</p>
                <p className="descricao">{titulo}</p>
                </div>
                <div className="comprador">
                   <p className="titulo">Comprador</p>
                   <p className="descricao">Nome: {nome}</p>
                   <p className="descricao">CPF: {cpf}</p>
                </div>
                
                
               <Link to={"/"}> <div className="reserva"><p>Voltar para Home</p></div></Link>
            </div>
        </div>

    )
}
export default TelaFinal;