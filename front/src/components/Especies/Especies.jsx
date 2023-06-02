import "./Especies.css"
import {useState} from "react";
import { Link, useLocation } from "wouter";
import { deleteEspecieById } from "../../service/especieService";

function Especies (){
    const [, setLocation] = useLocation()
    const [byId, setById] = useState(undefined);
    const [isVisibleGet, setIsVisible] = useState(false);
    const [updatebyId, setUpdateById] = useState(undefined);
    const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
    const [deletebyId, setDeleteById] = useState(undefined);
    const [response, setResponse] = useState();
    const [isVisibleDelete, setIsVisibleDelete] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(true);
        };
        const handleButtonClick2 = () => {
            setIsVisibleDelete(true);
            };
    const handleButtonClick3 = () => {
            setIsVisibleUpdate(true);
            };
    const handleButtonAll = () => {
        setLocation("/especies/all")
    };

    const handleButton4 = () => {
        setLocation("/especies/add")
    };
    const handleButtonGet = () => {
        setLocation("/especies/"+byId)
    };

    const handleButtonUpdate = () => {
        setLocation("/especies/update/"+updatebyId)
    };

    const handleButtonDelete = async() => {
        await deleteEspecieById(deletebyId).then((result) =>{ setResponse(result.data); console.log(response)})            
    };
    
    return(
        <>
            <Link to="/"><h1>ESPECIES</h1></Link>
            <button className="boton" onClick={handleButtonAll}>/getAllEspecies</button> <br/>
            <button className="boton" onClick={handleButtonClick}>/getEspeciesById</button>{isVisibleGet&& <div><input type="number" placeholder="Introduce el ID" style={{display: "inline"}} value={byId} onChange={(id) => setById(id.target.value)}></input> <button className="boton" style={{display: "inline", backgroundColor:'#F1F7B6'}} onClick={handleButtonGet}>buscar</button></div>} <br/>
            <button className="boton" onClick={handleButtonClick3}>/updateEspecie</button>{isVisibleUpdate&& <div><input type="number" placeholder="Introduce el ID"  style={{display: "inline"}} value={updatebyId} onChange={(id2) => setUpdateById(id2.target.value)}></input> <button className="boton" style={{display: "inline",backgroundColor:'#F7D8B6'}} onClick={handleButtonUpdate}>modificar</button></div>}<br/>
            <button className="boton" onClick={handleButtonClick2}>/deleteById</button>{isVisibleDelete&& <div><input type="number" placeholder="Introduce el ID" style={{display: "inline"}} value={deletebyId} onChange={(id3) => setDeleteById(id3.target.value)}></input> <button className="boton" style={{display: "inline",backgroundColor:'#F7B6B6'}} onClick={handleButtonDelete}>eliminar</button></div>}<br/>
            {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            <button className="boton" onClick={handleButton4}>/addEspecie</button><br/>
        </>
    )
}

export default Especies