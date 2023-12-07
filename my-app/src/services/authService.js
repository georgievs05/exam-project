import { request } from "../lib/request";

const baseUrl = "http://localhost:3030/users"

export const login = async (email, password) =>{
const result = await request("POST", `${baseUrl}/login`, {
    email,
    password
})
return result
}


export const register = async (email,password)=>request("POST", `${baseUrl}/register`,{
    email,
    password
})

export const logout =()=>request("GET", `${baseUrl}/logout`)