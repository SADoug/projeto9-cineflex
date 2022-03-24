import { useState, useEffect } from 'react';
import axios from 'axios';

import "./style.css";

export default function HomePage() {
    const [items, setItems] = useState([]);

    useEffect(() => {
		const requisicao = axios.get("http://...");

		requisicao.then(resposta => {
			setItems(resposta.data.items);
		});
	}, []);
    
	if(items === null) {
		return <img src="loading.gif" />;
	}

    return (
        <div className="HomePage">
            <div className="titulo">
                <h1>Selecione o filme</h1>
            </div>
            <div className="Conteudo">
                <div className="filme"> <img src="#" alt="Minha Figura"></img></div>
            </div>
        </div>
    )
}
