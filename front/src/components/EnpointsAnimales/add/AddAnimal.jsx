
import { useState} from "react";
import { addAnimalBy } from "../../../service/animalService";
import { Link } from "wouter";


export default function AddAnimal(){
   
    const [_id, setId]=useState();
    const [title, setTitle]=useState();
    const [altura_media, setAltura]=useState();
    const [peso, setPeso]=useState();
    const [habitat, setHabitat]=useState();
    const [response, setResponse] = useState();

    

    const handleClick= async() => {
        const body = {
            _id: parseInt(_id),
            title: title,
            altura_media:parseInt(altura_media),
            peso: parseInt(peso),
            habitat: habitat
        } 
        await addAnimalBy(body).then((result) =>{ setResponse(result.data); console.log(response)})  
    };
   

    return(
        <>
            <Link to="/animales"><h1>ANIMALES</h1></Link>
            <div>
                <p><b>Id: </b><input type="number" value={_id} onChange={(idAn) => setId(idAn.target.value)}></input> </p>
                <p><b>Nombre animal: </b><input type="text"  value={title} onChange={(titulo) => setTitle(titulo.target.value)}></input> </p>
                <p><b>Altura media: </b><input type="number"  value={altura_media} onChange={(altura) => setAltura(altura.target.value)}></input> </p>
                <p><b>Peso: </b><input type="number"  value={peso} onChange={(pesa) => setPeso(pesa.target.value)}></input> </p>
                <p><b>Habitat: </b><input type="text" value={habitat} onChange={(hab) => setHabitat(hab.target.value)}></input> </p>
                <button onClick={handleClick}>AÑADIR</button>
                {response? <div><p><b>Resultado:</b> {response} </p> <br/></div>:"" }
            </div>
    
        </>

)}