
import axios from "axios"

export const getAllEspecies= async() =>{
    const url = "http://localhost:3000/especies/" 
    const result = await axios.get(url)
    return result
  }

  export const getEspecieById= async(id) =>{
    const url = "http://localhost:3000/especies/"+id
    //const url = `http://localhost:8080/book/allBooks/${orderBy}`
    const result = await axios.get(url)
    return result
  }
  export const updateEspecieById= async (body)=>{
    const url= "http://localhost:3000/especies/"+body._id
    const result= await axios.put(url,body)
    return result
}

export const deleteEspecieById= async (id)=>{
  const url= "http://localhost:3000/especies/"+id
  const result= await axios.delete(url)
  return result
}

export const addEspecieBy= async (body)=>{  
  const url= "http://localhost:3000/especies/"
  const result= await axios.post(url,body)
  return result
}
