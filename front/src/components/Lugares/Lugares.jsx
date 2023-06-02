import "./Lugares.css"
import { Link,useLocation} from "wouter";
import {useState} from "react";
import { deleteLugarById } from "../../service/lugaresService";
function Lugares (){
    const [, setLocation] = useLocation()
    const [isVisibleGet, setIsVisible] = useState(false);
    const [isVisibleDelete, setIsVisibleDelete] = useState(false);
    const [isVisibleUpdate, setIsVisibleUpdate] = useState(false);
    const [byId, setById] = useState(undefined);
    const [updatebyId, setUpdateById] = useState(undefined);
    const [deletebyId, setDeleteById] = useState(undefined);
    const [response, setResponse] = useState();

    const handleButtonClickAll = () => {
        setLocation("/lugares/all/")
        };
    const handleButtonClick = () => {
            setIsVisible(true);
            };
    const handleButtonUpdate = () => {
                setLocation("/lugares/update/"+updatebyId)
            };
    const handleButtonGet = () => {
            setLocation("/lugares/"+byId)
            };
    const handleButtonClick2 = () => {
                setIsVisibleDelete(true);
                };
    const handleButtonClick3 = () => {
                setIsVisibleUpdate(true);
                };
    const handleButtonClickAdd = () => {
                setLocation("/lugares/add")
            };
     const handleButtonDelete = async() => {
                await deleteLugarById(deletebyId).then((result) =>{ setResponse(result.data); console.log(response)})            
            };
                
            
    return(
        <>
            <Link to="/"><h1>LUGARES</h1></Link>
            <button className="boton" onClick={handleButtonClickAll}>/getAllLugares</button> <br/>
            <button className="boton" onClick={handleButtonClick}>/getLugarById</button>{isVisibleGet&& <div><input type="number" placeholder="Introduce el ID" style={{display: "inline"}} value={byId} onChange={(id) => setById(id.target.value)}></input> <button className="boton" style={{display: "inline", backgroundColor:'#F1F7B6'}} onClick={handleButtonGet}>buscar</button></div>} <br/>
            <button className="boton"onClick={handleButtonClick3}>/updateLugar</button>{isVisibleUpdate&& <div><input type="number" placeholder="Introduce el ID"  style={{display: "inline"}} value={updatebyId} onChange={(id2) => setUpdateById(id2.target.value)}></input> <button className="boton" style={{display: "inline",backgroundColor:'#F7D8B6'}} onClick={handleButtonUpdate}>modificar</button></div>}<br/>
            <button className="boton"onClick={handleButtonClick2}>/deleteById</button>{isVisibleDelete&& <div><input type="number" placeholder="Introduce el ID" style={{display: "inline"}} value={deletebyId} onChange={(id3) => setDeleteById(id3.target.value)}></input> <button className="boton" style={{display: "inline",backgroundColor:'#F7B6B6'}} onClick={handleButtonDelete}>eliminar</button></div>}<br/>
            {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            <button className="boton"onClick={handleButtonClickAdd}>/addLugar</button><br/>
        </>
    )
}

export default Lugares