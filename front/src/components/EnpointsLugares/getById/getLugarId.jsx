import {useEffect, useState} from "react";
import { Link } from "wouter";
import { getLugarById } from "../../../service/lugaresService";


export default function LugarById({params}){
    const {id} = params
    console.log(id)
    const [lugar,setLugar]= useState();

    useEffect(()=> {
        getLugarById(id)
            .then((result) =>{ setLugar(result.data); console.log(lugar)})
        
    },[])

  

    return(
        <>
            <Link to="/lugares"><h1>LUGAR</h1></Link>
            {lugar?(
            <div className="animalCuadrado">    
                            <p><b>Id: </b> {lugar._id}</p>
                            <p><b>Nombre: </b> {lugar.nombre}</p>
                            <p><b>Ubicacion: </b> {lugar.ubicacion}</p>    
                            <p><b>Clima: </b> {lugar.clima}</p>  
                            <p><b>Superficie: </b> {lugar.superficie}</p>  
                            <p><b>Animales: </b> {lugar.animales.join(",")}</p>  
                            <p><b>Visitantes anuales: </b> {lugar.visitantes_anuales}</p>                  
            </div>):
            (<div>
                {/*<img src="http://www.reactiongifs.com/r/2012/11/crying-man.gif" />*/}
                <img className="hasb" src="https://gifdb.com/images/high/hasbulla-cute-smile-waving-hello-8kv2p5oa2v32st14.gif" />
                <h2>LUGAR NO ENCONTRADO</h2>
            </div>)}
        </>
    )


}