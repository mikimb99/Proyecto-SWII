import axios from "axios"

export const getGif= async(concepto) =>{
    const url = "http://localhost:3000/gifs/"+concepto
    const result = await axios.get(url)
    return result
}