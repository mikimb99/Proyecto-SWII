import "./Portada.css"
import { Link } from "wouter";

function Portada (){
    return (
    <>
        <img src="https://media0.giphy.com/media/QhnUbl9eMAPKM/giphy.gif?cid=ecf05e47grap1huqn4fft0b1lk87dkcghpuwyrpueysvzky3&ep=v1_gifs_search&rid=giphy.gif&ct=g" width="480" height="270" ></img>
        <h1>PRÁCTICA SW II</h1>
        <Link to="/animales" ><button className="boton">ANIMALES</button></Link>
        <Link to="/especies" ><button className="boton">ESPECIES</button></Link>
        <Link to="/lugares" ><button className="boton">LUGARES</button></Link>
    </>
)}

export default Portada