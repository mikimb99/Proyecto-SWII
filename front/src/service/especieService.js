
import axios from "axios"

export const getAllEspecies= async() =>{
    const url = "http://localhost:3000/especies/" 
    const result = await axios.get(url)
    return result
  }

  