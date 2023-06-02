
import { Link} from "wouter";
import { useState,useEffect} from "react";

import "./getAll.css"
import { getAllLugares } from "../../../service/lugaresService";

export default function GetAllLugares(){

    const [lugares, setLugares] = useState([])
    
    useEffect(()=> {
        getAllLugares(lugares)
            .then((result) => {console.log(result);setLugares(result.data); })
        
    },[])

  
    return(
        <>
            <Link to="/lugares"><h1>LUGARES</h1></Link>
           
            <div className="listaAnimales">
            {lugares.map(({_id, nombre, ubicacion,animales,clima,superficie,visitantes_anuales },i)=>{
                return(
                    <div key={_id} className="animalCuadrado">    
                            <p><b>Id: </b> {_id}</p>
                            <p><b>Nombre: </b> {nombre}</p>
                            <p><b>Ubicacion: </b> {ubicacion}</p>    
                            <p><b>Clima: </b> {clima}</p>  
                            <p><b>Superficie: </b> {superficie}</p>  
                            <p><b>Animales: </b> {animales.join(",")}</p>  
                            <p><b>Visitantes anuales: </b> {visitantes_anuales}</p>                
                    </div>
                )
            })}</div>
         
        </>
)}