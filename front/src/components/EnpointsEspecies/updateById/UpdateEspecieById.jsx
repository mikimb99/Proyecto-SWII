import {useEffect, useState} from "react";
import { Link } from "wouter";
import { getEspecieById } from "../../../service/especieService";
import { updateEspecieById } from "../../../service/especieService";
import "./updateEsp.css"

export default function UpdateEspecieById({params}){
    const {id} = params
    const [especie,setEspecie]= useState(undefined);
    const [_id, setId]=useState();
    const [tipo, setTipo]=useState();
    const [descripcion, setDescripcion]=useState();
    const [response, setResponse] = useState();

    useEffect(()=> {
        getEspecieById(id)
            .then((result) =>{ setEspecie(result.data);  console.log(especie);setId(result.data._id);setTipo(result.data.tipo); setDescripcion(result.data.descripcion)})
        
    },[])

    const handleClick= async() => {
        const body = {
            _id: _id,
            tipo: tipo,
            descripcion: descripcion
        } 
        console.log("BODY:" + body.descripcion + body.tipo)
       try{
        await updateEspecieById(body).then((result) =>{ setResponse(result.data); console.log(response)})  
       }catch{
        setResponse("Error")
       }
    };

    return(
        <>
            <Link to="/especies"><h1>ESPECIES</h1></Link>
            {especie?(<div>
                <p><b>Tipo: </b><input type="text"  value={tipo} onChange={(tip) => setTipo(tip.target.value)}></input> </p>
                <p><b>Descripción: </b></p>
                <textarea className="descrip" value={descripcion} onChange={(descr) => setDescripcion(descr.target.value)}></textarea> <br/>
                <button onClick={handleClick}>MODIFICAR</button>
                {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            </div>

            ):(<div>
                <h2>ESPECIE NO ENCONTRADO</h2>
                <img src="https://media.tenor.com/L79VpfpRYUgAAAAC/hasbulla-magomedov-hasbulla.gif" />
                </div>)}
        </>

    )

}