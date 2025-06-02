const BackendUrl=import.meta.env.VITE_BACKEND_URL
import axios from "axios";


export const sendEmail=async(prompt,tone,type)=>{
    return await axios.post('http://localhost:3000/generate-email', {
        prompt,
        tone,
        type
        });

}

export const resetPrompts=async()=>{
    return await axios.post('http://localhost:3000/reset');

}