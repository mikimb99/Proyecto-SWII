import { getGif } from "../../service/gifs";
import "./Portada.css"
import { Link } from "wouter";
import {useEffect, useState} from "react";

export default function PortadaGif ({params}){
    const {animal} = params
    const [gif,setGif]= useState("https://media0.giphy.com/media/QhnUbl9eMAPKM/giphy.gif?cid=ecf05e47grap1huqn4fft0b1lk87dkcghpuwyrpueysvzky3&ep=v1_gifs_search&rid=giphy.gif&ct=g");
    
 
    useEffect(()=> {
        if (animal==="rata"){
                setGif("https://4.bp.blogspot.com/-Q4RvseVO_Rs/V2qOrKW8bUI/AAAAAAAABl8/PbgRxsAYvQU4P7wblCeA56VPqdXEKR90QCLcB/s1600/podemos.gif")
        }else{
            getGif(animal)
            .then((result) =>{ setGif(result.data); console.log(gif)})
        }   
    },[])

    return (
    <>
        <img src={gif} width="480" height="270" ></img>
        <h1>PRÁCTICA SW II</h1>
        <Link to="/animales" ><button className="boton">ANIMALES</button></Link>
        <Link to="/especies" ><button className="boton">ESPECIES</button></Link>
        <Link to="/lugares" ><button className="boton">LUGARES</button></Link>
    </>
)}

