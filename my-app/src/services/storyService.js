import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/data/stories'


export const getAll = async ()=>{
 const result = await request("GET", baseUrl)
 return (result)
};
    
export const getOne = async (storyId) =>{
    const result = await request("GET", `${baseUrl}/${storyId}`)

    return result
}

    
export const create = async (storyData) => {
 const result = await request("POST", baseUrl, storyData)
 return result
}

export const edit = async (storyId, storyData) => {
    const result = await request("PUT", `${baseUrl}/${storyId}`, storyData);

    return result;
};

export const remove = async (storyId) => request("DELETE", `${baseUrl}/${storyId}`);