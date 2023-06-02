import {useEffect, useState} from "react";
import { Link } from "wouter";
import { getEspecieById } from "../../../service/especieService";
import "./especiesId.css"

export default function EspecieById({params}){
    const {id} = params
    console.log(id)
    const [especie,setEspecie]= useState();

    useEffect(()=> {
        getEspecieById(id)
            .then((result) =>{ setEspecie(result.data); console.log(especie)})
        
    },[])

  

    return(
        <>
            <Link to="/especies"><h1>ESPECIES</h1></Link>
            {especie?(
            <div className="animalCuadrado">    
                    <p><b>Id: </b> {especie._id}</p>
                    <p><b>Tipo: </b> {especie.tipo}</p>
                    <p><b>Descripción: </b> {especie.descripcion}</p>                  
            </div>):
            (<div>
                {/*<img src="http://www.reactiongifs.com/r/2012/11/crying-man.gif" />*/}
                <img className="hasb" src="https://gifdb.com/images/high/hasbulla-cute-smile-waving-hello-8kv2p5oa2v32st14.gif" />
                <h2>ANIMAL NO ENCONTRADO</h2>
            </div>)}
        </>
    )


}