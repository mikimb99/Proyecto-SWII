
import axios from "axios"

export const getAllLugares= async() =>{
    const url = "http://localhost:3000/lugares/" 
    const result = await axios.get(url)
    return result
  }

  export const getLugarById= async(id) =>{
    const url = "http://localhost:3000/lugares/"+id
    //const url = `http://localhost:8080/book/allBooks/${orderBy}`
    const result = await axios.get(url)
    return result
  }
  export const updateLugarById= async (body)=>{
    const url= "http://localhost:3000/lugares/"+body._id
    const result= await axios.put(url,body)
    return result
}

export const deleteLugarById= async (id)=>{
  const url= "http://localhost:3000/lugares/"+id
  const result= await axios.delete(url)
  return result
}

export const addLugarBy= async (body)=>{  
  const url= "http://localhost:3000/lugares/"
  const result= await axios.post(url,body)
  return result
}
