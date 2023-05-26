
import {useEffect, useState} from "react";
import { getAnimalById } from "../../../service/animalService";
import { Link } from "wouter";
import { updateAnimalById } from "../../../service/animalService";

export default function UpdateById({params}){
    const {id} = params
    console.log(id)
    const [animal,setAnimal]= useState(undefined);
    const [_id, setId]=useState();
    const [title, setTitle]=useState();
    const [altura_media, setAltura]=useState();
    const [peso, setPeso]=useState();
    const [habitat, setHabitat]=useState();
    const [response, setResponse] = useState();

    useEffect(()=> {
        getAnimalById(id)
            .then((result) =>{ setAnimal(result.data);  console.log(animal);setId(result.data._id);setTitle(result.data.title); setAltura(result.data.altura_media);setPeso(result.data.peso);setHabitat(result.data.habitat)})
        
    },[])

    const handleClick= async() => {
        const body = {
            _id: _id,
            title: title,
            altura_media: altura_media,
            peso: peso,
            habitat: habitat
        } 
        await updateAnimalById(body).then((result) =>{ setResponse(result.data); console.log(response)})  
    };
   

    return(
        <>
            <Link to="/animales"><h1>ANIMALES</h1></Link>
            {animal?(<div>
                <p><b>Id: </b><input type="text" value={_id} onChange={(idAn) => setId(idAn.target.value)}></input> </p>
                <p><b>Nombre animal: </b><input type="text"  value={title} onChange={(titulo) => setTitle(titulo.target.value)}></input> </p>
                <p><b>Altura media: </b><input type="text"  value={altura_media} onChange={(altura) => setAltura(altura.target.value)}></input> </p>
                <p><b>Peso: </b><input type="text"  value={peso} onChange={(pesa) => setPeso(pesa.target.value)}></input> </p>
                <p><b>Habitat: </b><input type="text" value={habitat} onChange={(hab) => setHabitat(hab.target.value)}></input> </p>
                <button onClick={handleClick}>MODIFICAR</button>
                {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            </div>

            ):(<div>
                <h2>ANIMAL NO ENCONTRADO</h2>
                <img src="http://www.reactiongifs.com/r/2012/11/crying-man.gif" />
                </div>)}
        </>

)}