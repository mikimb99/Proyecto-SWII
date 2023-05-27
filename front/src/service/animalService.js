import axios from "axios"

export const getAllAnimales2= async() =>{
    const url = "http://localhost:3000/animales/" 
    const result = await axios.get(url)
    return result
  }
export const getAllAnimales= async(page) =>{
    const pageSize=9
    const url = "http://localhost:3000/animales/pagina"
    
    const result = await axios.get(url, {params: {page,pageSize}})

    return result
}

export const getAllAnimalesHabitat= async(habitat) =>{
   
    const url = "http://localhost:3000/animales/search"
   
    const result = await axios.get(url, {params: {habitat}})

    return result
}

  export const getAnimalById= async(id) =>{
    const url = "http://localhost:3000/animales/"+id
    //const url = `http://localhost:8080/book/allBooks/${orderBy}`
    const result = await axios.get(url)
    return result
}

export const deleteAnimalById= async (id)=>{
    const url= "http://localhost:3000/animales/"+id

    const result= await axios.delete(url)
    return result
}

export const updateAnimalById= async (body)=>{
   
    const url= "http://localhost:3000/animales/"+body._id

    
    const result= await axios.put(url,body)
    return result
}

export const addAnimalBy= async (body)=>{  
    const url= "http://localhost:3000/animales/"
    const result= await axios.post(url,body)
    return result
}

