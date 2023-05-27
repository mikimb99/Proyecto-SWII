
import { Link,useLocation } from "wouter";
import { useState,useEffect} from "react";
import { getAllAnimales } from "../../../service/animalService";
import "./getAll.css"


export default function GetAll({params}){
    let {pagina}= params
    const [animales, setAnimales] = useState([])
    const [page, setPagina] = useState(1) 
    const [maxPags,setMaxPags]=useState()
    const [cambio,setCambio]=useState(false)
    const [, setLocation] = useLocation()



    
    useEffect(()=> {
        getAllAnimales(pagina)
            .then((result) => {console.log(result);setAnimales(result.data.results); setMaxPags(result.data.totalPages); console.log(page); console.log(maxPags)})
        
    },[])

    const handleClick= () => {
        if((page+4)<maxPags){
            setPagina(page+5)
        }  
    }
    const handleClickPrev= () => {
        if(page !=1){
            setPagina(page-5)
        }  
    }

    const handleClickPagina= (numero) => {
        const newPag= numero+page
        const url = "/animales/getAll/"+newPag
        window.location.href = url
    }


   


    return(
        <>
            <Link to="/animales"><h1>ANIMALES</h1></Link>
            <div className="listaAnimales">
            {animales.map(({_id, title, altura_media,peso,habitat },i)=>{
                return(
                    <div key={_id} className="animalCuadrado">    
                            <p><b>Id: </b> {_id}</p>
                            <p><b>Nombre animal: </b> {title}</p>
                            <p><b>Altura media: </b> {altura_media}</p>
                            <p><b>Peso: </b> {peso}</p>
                            <p><b>Habitat: </b> {habitat}</p>                     
                    </div>
                )
            })}</div>
            <div className="listaPaginas">
                    <button className="number" style={{display:(page!=1?"inline":"none")}} onClick={handleClickPrev}>...</button>
                    <button className="number" onClick={()=>handleClickPagina(0)}  >{page<=maxPags?page:""}</button>
                    <button className="number" onClick={()=>handleClickPagina(1)}  style={{display:(page+1<=maxPags?"inline":"none")}} >{page+1<=maxPags?page+1:""}</button>
                    <button className="number" onClick={()=>handleClickPagina(2)}  style={{display:(page+2<=maxPags?"inline":"none")}} >{page+2<=maxPags?page+2:""}</button>
                    <button className="number" onClick={()=>handleClickPagina(3)}  style={{display:(page+3<=maxPags?"inline":"none")}}>{page+3<=maxPags?page+3:""}</button>
                    <button className="number" onClick={()=>handleClickPagina(4)}  style={{display:(page+4<=maxPags?"inline":"none")}} >{page+4<=maxPags?page+4:""}</button>
                    <button className="number" onClick={handleClick}>...</button>
            </div>
        </>
)}