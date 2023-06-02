import {useEffect, useState} from "react";
import { Link } from "wouter";
import { getLugarById } from "../../../service/lugaresService";
import { updateLugarById } from "../../../service/lugaresService";


export default function UpdateLugarById({params}){
    const {id} = params
    const [lugar,setLugar]= useState(undefined);
    const [_id, setId]=useState();
    const [nombre, setNombre]=useState();
    const [response, setResponse]=useState();
    const [ubicacion, setUbicacion]=useState();
    const [animales, setAnimales] = useState();
    const [clima, setClima]=useState();
    const [superficie, setSuperficie] = useState();
    const [visitantes_anuales, setVisitantes] = useState();

    useEffect(()=> {
        getLugarById(id)
            .then((result) =>{ setLugar(result.data);  console.log(lugar);setId(result.data._id);setNombre(result.data.nombre); setUbicacion(result.data.ubicacion);setAnimales(result.data.animales), setClima(result.data.clima); setSuperficie(result.data.superficie); setVisitantes(result.data.visitantes_anuales) })
        
    },[])

    const handleClick= async() => {
        const body = {
            _id: _id,
            nombre: nombre,
            ubicacion: ubicacion,
            animales: animales,
            clima:clima,
            superficie:superficie,
            visitantes_anuales: parseInt(visitantes_anuales)
        } 
        console.log("BODY:" + body.descripcion + body.tipo)
        await updateLugarById(body).then((result) =>{ setResponse(result.data); console.log(response)})  
    };

    return(
        <>
            <Link to="/lugares"><h1>LUGARES</h1></Link>
            {lugar?(<div>
                <p><b>Id: </b><input type="text" value={_id} onChange={(idAn) => setId(idAn.target.value)}></input> </p>
                <p><b>Nombre: </b><input type="text"  value={nombre} onChange={(tip) => setNombre(tip.target.value)}></input> </p>
                <p><b>Ubicación: </b><input type="text"  value={ubicacion} onChange={(ub) => setUbicacion(ub.target.value)}></input> </p>
                <p><b>Animales: </b><input type="text"  value={animales.join(",")} onChange={(anim) => {setAnimales(anim.target.value.split(', ')); console.log(animales)}}></input> </p>
                <p><b>Clima: </b><input type="text"  value={clima} onChange={(clim) => setClima(clim.target.value)}></input> </p>
                <p><b>Superficie: </b><input type="text"  value={superficie} onChange={(sup) => setSuperficie(sup.target.value)}></input> </p>
                <p><b>Visitantes: </b><input type="text"  value={visitantes_anuales} onChange={(vis) => setSuperficie(vis.target.value)}></input> </p>
                <button onClick={handleClick}>MODIFICAR</button>
                {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            </div>

            ):(<div>
                <h2>LUGAR NO ENCONTRADO</h2>
                <img src="https://media.tenor.com/L79VpfpRYUgAAAAC/hasbulla-magomedov-hasbulla.gif" />
                </div>)}
        </>

    )

}