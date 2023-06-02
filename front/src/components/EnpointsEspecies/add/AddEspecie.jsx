import { useState} from "react";
import { Link } from "wouter";
import { addEspecieBy } from "../../../service/especieService";

export default function AddEspecie(){
    const [_id, setId]=useState();
    const [tipo, setTipo]=useState();
    const [descripcion, setDescripcion]=useState();
    const [response, setResponse] = useState();


    const handleClick= async() => {
        const body = {
            _id: parseInt(_id),
            tipo: tipo,
            descripcion:descripcion,
            
        } 
        await addEspecieBy(body).then((result) =>{ setResponse(result.data); console.log(response)})  
    };

    return(
        <>
            <Link to="/especies"><h1>ESPECIES</h1></Link>
            <div>
                <p><b>Id: </b><input type="number" value={_id} onChange={(idAn) => setId(idAn.target.value)}></input> </p>
                <p><b>Tipo: </b><input type="text"  value={tipo} onChange={(tip) => setTipo(tip.target.value)}></input> </p>
                <p><b>Descripción: </b><input type="text"  value={descripcion} onChange={(des) => setDescripcion(des.target.value)}></input> </p>
                
                <button onClick={handleClick}>AÑADIR</button>
                {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            </div>
    
        </>
)

}