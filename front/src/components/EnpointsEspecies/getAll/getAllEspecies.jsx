
import { Link} from "wouter";
import { useState,useEffect} from "react";

import "./getAll.css"
import { getAllEspecies } from "../../../service/especieService";


export default function GetAllEspecies(){

    const [especies, setEspecies] = useState([])
    
    useEffect(()=> {
        getAllEspecies(especies)
            .then((result) => {console.log(result);setEspecies(result.data); })
        
    },[])

  
    return(
        <>
            <Link to="/especies"><h1>ESPECIES</h1></Link>
           
            <div className="listaAnimales">
            {especies.map(({_id, tipo, descripcion },i)=>{
                return(
                    <div key={_id} className="animalCuadrado">    
                            <p><b>Id: </b> {_id}</p>
                            <p><b>Tipo: </b> {tipo}</p>
                            <p><b>Descripción: </b> {descripcion}</p>                  
                    </div>
                )
            })}</div>
         
        </>
)}