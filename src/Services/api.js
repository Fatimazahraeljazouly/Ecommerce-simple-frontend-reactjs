import axios from 'axios';

const API_BASE_URL = 'http://localhost:8083/api/users'; // Replace with your API base URL

export const getExampleData = async () => {
  const response = await axios.get(`${API_BASE_URL}/AllUsers`);
  return response.data;
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
