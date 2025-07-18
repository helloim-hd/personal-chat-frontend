import axios from 'axios';

const getSession = async (token) => {
  try {
    const url = `${import.meta.env.VITE_CHAT_BACKEND_URL}/session`;
    const result = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return result.data;
  } catch (error) {
    console.log(error);
  }
};


const signUp = async (name, password) => {
  try {
    const url = `${import.meta.env.VITE_CHAT_BACKEND_URL}/signup`;
    const result = await axios.post(url, {name, password});
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

const signIn = async (name, password) => {
  try {
    const url = `${import.meta.env.VITE_CHAT_BACKEND_URL}/signin`;
    const result = await axios.post(url, {name, password});
    return result.data;
  } catch (error) {
    console.log(error);
  }
};


export default {
  getSession,
  signUp,
  signIn
};
