import "./Footer.css" 

export default function Footer(props) {
return (
    <>
<div className="footer" >
<div className='img-bordinha'>
<img src={props.imagem} alt="" />
</div>
<h1>{props.title}</h1>
</div> 
</>
)}