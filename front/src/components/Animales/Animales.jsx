import "./Animales.css"
import { Link, useLocation } from "wouter";
import {useState} from "react";

import { deleteAnimalById } from "../../service/animalService";




function Animales (){
    const [isVisibleGet, setIsVisible] = useState(false);
    const [isVisibleDelete, setIsVisibleDelete] = useState(false);
    const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
    const [, setLocation] = useLocation()

    const [byId, setById] = useState(undefined);
    const [updatebyId, setUpdateById] = useState(undefined);
    const [deletebyId, setDeleteById] = useState(undefined);
    const [response, setResponse] = useState();
    const handleButtonClick = () => {
    setIsVisible(true);
    };
    const handleButtonClick2 = () => {
        setIsVisibleDelete(true);
        };
    const handleButtonClick3 = () => {
        setIsVisibleUpdate(true);
        };
    
    const handleButtonGet = () => {
        setLocation("/animales/"+byId)
    };

    const handleButtonUpdate = () => {
        setLocation("/animales/update/"+updatebyId)
    };
    const handleButtonDelete = async() => {
        try{
            await deleteAnimalById(deletebyId).then((result) =>{ setResponse(result.data); console.log(response)})   
        }catch{
            setResponse("Error");
        }
                 
    };
    const handleButtonClickAdd = () => {
        setLocation("/animales/add")
        };
    const handleButtonClickAll = () => {
        setLocation("/animales/getAll/1")
        };
    
    return(
        <>
            <Link to="/home"><h1>ANIMALES</h1></Link>
            <button className="boton"onClick={handleButtonClickAll}>/getAllAnimales</button> <br/>
            <button className="boton" onClick={handleButtonClick}>/getAnimalById</button>{isVisibleGet&& <div><input type="number" placeholder="Introduce el ID" style={{display: "inline"}} value={byId} onChange={(id) => setById(id.target.value)}></input> <button className="boton" style={{display: "inline", backgroundColor:'#F1F7B6'}} onClick={handleButtonGet}>buscar</button></div>} <br/>
            <button className="boton"onClick={handleButtonClick3}>/getUpdateAnimal</button>{isVisibleUpdate&& <div><input type="number" placeholder="Introduce el ID"  style={{display: "inline"}} value={updatebyId} onChange={(id2) => setUpdateById(id2.target.value)}></input> <button className="boton" style={{display: "inline",backgroundColor:'#F7D8B6'}} onClick={handleButtonUpdate}>modificar</button></div>}<br/>
            <button className="boton"onClick={handleButtonClick2}>/deleteById</button>{isVisibleDelete&& <div><input type="number" placeholder="Introduce el ID" style={{display: "inline"}} value={deletebyId} onChange={(id3) => setDeleteById(id3.target.value)}></input> <button className="boton" style={{display: "inline",backgroundColor:'#F7B6B6'}} onClick={handleButtonDelete}>eliminar</button></div>}<br/>
            {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            <button className="boton" onClick={handleButtonClickAdd}>/addAnimal</button><br/>
        </>
    )
}

export default Animales