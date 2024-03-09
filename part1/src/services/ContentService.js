import axios from "axios"
const base_url='http://localhost:3001/persons'
const getAll=()=>{
   return axios.get(base_url)
}


const create=newObject=>{
    return axios.post(base_url,newObject)
}
const todelete=id=>{
    return axios.delete(`${base_url}/${id}`)
}
export default{getAll,create,todelete}
