import axios from 'axios';

const API_BASE_URL = 'http://localhost:8083/api/users'; // Replace with your API base URL

export const getAllUsers = async () => {
  try{
    const response = await axios.get(`${API_BASE_URL}/Allusers`);
    //console.log("data get ")
    console.log('API Response:', response.data); // Log the response to check its structure

    return response.data;
  }catch(error){
        console.error(" error of getting data ",error)
        throw error;
        
  }
  
};

export const postUserData = async (data) => {
    try{

        const response = await axios.post(`${API_BASE_URL}/addUser`, data);
       console.log("added successfully");
        
        return response.data;
    }
    catch(error){
        console.error("Error posting user data",error);
        throw error;
    }
 
};

export const deleteUser= async (IdUser)=>{
  try{
    const response= await axios.delete(`${API_BASE_URL}/delete/${IdUser}`)
    console.log("delete successfully");
    return response.data;
}catch(e){
    console.error('error in deleting user',e)
    throw e;
  }  
};
export const updateUser=async(IdUser,userData)=>{
    try{
        const response = await axios.put(`${API_BASE_URL}/update/${IdUser}`,userData);
        console.log("update successfully");
        return response.data;
    }catch(e){
        console.error("something went wrong during updating ",e);
        throw e;
    }
};
export const getUserById=async (Id)=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/getbyid/${Id}`);
        console.log("user founded");
        return response.data
    }catch(e){
        console.error("user not found or something went wrong",e);
        throw e;
    }
};
const API_BASE_URL_art = 'http://localhost:8083/api/articles'; // Replace with your API base URL

export const addArticle=async (articleData)=>{
    try{
        const response =await axios.post(`${API_BASE_URL_art}/addArticle`,articleData);
        console.log("article added successfully");
        return response.data;
    }catch(e){
            console.error("error at adding the article ",e)
            throw e;
    }
}

export const getALLArticle=async()=>{

    try{
        const response=await axios.get(`${API_BASE_URL_art}/list-articls`);
        console.log("data exist");
        return response.data;
    }catch(e){
        console.error("error during getting data",e)
        throw e;
    }
}
export const deletArticle=async(Id)=>{
    try{
            const response = await axios.delete(`${API_BASE_URL_art}/delete/${Id}`);
            console.log("article deleted successfully");
            return response.data;
    }catch(e){
        console.error("error during deleting tha article",e);
        throw e;
    }
}