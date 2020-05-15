import axios from 'axios'
const url='http://127.0.0.1:8000'
export const fetchDataFromBackend=async ()=>{
    try {
        const {data}=await axios.get(url)
        // console.log("this is my data",data)
        return data
    } catch (error) {
        console.log("error")
    }
}
const urlDjango='http://127.0.0.1:8000/loginPost/'

export const fetchDataFromBackendDjango=async ()=>{
    try {
        
        const {data}=await axios.post(urlDjango)
        return data
        
    } catch (error) {
        // const data=await fetch(urlDjango).then(res=>res.json())
        console.log("error***********")
    }
}