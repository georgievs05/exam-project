import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/stories'


export const getAll = async ()=>{
 const result = await request("GET", baseUrl)
 return Object.values(result)
};
    
    
export const create = async (storyData) => {
 const result = await request("POST", baseUrl, storyData)
 return result
}