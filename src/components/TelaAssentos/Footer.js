import "./Footer.css" 

export default function Footer(props) {
   
return (
    <>
<div className="footer" >
<div className='img-bordinha'>
<img src={props.imagem} alt="" />
</div>
<div className="txt">
<h1>{props.titulo}</h1>
<h1>{props.horario}</h1>
<h1>{props.weekday}</h1>
</div>
</div> 
</>
)}