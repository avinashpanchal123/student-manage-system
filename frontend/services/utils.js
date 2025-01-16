import axios from 'axios';

const request = async (url, type) => {
  try {
    if (type.toLowerCase() === 'get') {
      const response = await axios.get(url);
      return response.data;
    } else if (type.toLowerCase() === 'post') {
      const response = await axios.post(url, data);
      return response.data;
    } 
  } catch (error) {
    console.error(`Error with ${type.toUpperCase()} request to ${url}:`, error);
    throw error;
  }
};


const getAllStudents = async()=>{
    let res = await request("https://jsonplaceholder.typicode.com/users", 'get')
    return res;
}

const getSingleStudent = async(id)=>{
    let res = await request(`https://jsonplaceholder.typicode.com/users/${id}`, 'get')
    return res;
}


export const services = {
    getAllStudents,
    getSingleStudent
  };

export default request;
