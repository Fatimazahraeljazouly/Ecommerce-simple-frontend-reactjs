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
       console.log("added succefly");
        
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
    console.log("delete succefly");
    return response.data;
}catch(e){
    console.error('error in deleting user',e)
    throw e;
  }  
};
export const updateUser=async(IdUser,userData)=>{
    try{
        const response = await axios.put(`${API_BASE_URL}/update/${IdUser}`,userData);
        console.log("update succefly");
        return response.data;
    }catch(e){
        console.error("something went wrong during updating ",e);
        throw e;
    }
};
export const getUserById=async (Id)=>{
    try{
        const response = await axios.get(`${API_BASE_URL}/getbyid/${Id}`);
        console.log("user finded");
        return response.data
    }catch(e){
        console.error("user not found or something went wrong",e);
        throw e;
    }
}