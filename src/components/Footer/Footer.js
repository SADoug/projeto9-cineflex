import "./Footer.css" 

export default function Footer(props) {
    console.log(props)
return (
    <>
<div className="footer" >
<div className='img-bordinha'>
<img src={props.imagem} alt="" />
</div>
<div className="txt">
<h1>{props.titulo}</h1>
</div>
</div> 
</>
)}