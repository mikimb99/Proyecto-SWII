
import {useEffect, useState} from "react";
import { getAnimalById } from "../../../service/animalService";
import { Link } from "wouter";

export default function AnimalById({params}){
    const {id} = params
    console.log(id)
    const [animal,setAnimal]= useState();

    useEffect(()=> {
        getAnimalById(id)
            .then((result) =>{ setAnimal(result.data); console.log(animal)})
        
    },[])

    return(
        <>
            <Link to="/animales"><h1>ANIMALES</h1></Link>
            {animal?(<div>
                <p><b>id: </b> {animal._id}</p>
                <p><b>Nombre animal: </b> {animal.title}</p>
                <p><b>Altura media: </b> {animal.altura_media}</p>
                <p><b>Peso: </b> {animal.peso}</p>
                <p><b>Habitat: </b> {animal.habitat}</p>
            </div>

            ):(<div>
                <h2>ANIMAL NO ENCONTRADO</h2>
                <img src="http://www.reactiongifs.com/r/2012/11/crying-man.gif" />
                </div>)}
        </>

)}