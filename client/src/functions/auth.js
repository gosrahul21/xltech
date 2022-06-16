import axios from "axios";
import store from "../store";

export const createOrUpdateUser = async (name,email, password) => {
  try {
    const {data} = await axios.post(`${process.env.REACT_APP_API}/auth/signup`, {name, email, password });   
    await loginUser(email,password);
  } catch (error) {
    store.dispatch({
      type:"SIGN_UP_FAILED"
    })
  }
};


export const currentUser = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-user`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const currentAdmin = async (authtoken) => {
  return await axios.post(
    `${process.env.REACT_APP_API}/current-admin`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};



export const loginUser = async (username, password)=>{
  try {
    const {data} = await axios.post(`${process.env.REACT_APP_API}/auth/login`, {email: username, password });
    // dispatch to reducer 
    store.dispatch({
      type: "LOGGED_IN_USER",
      payload: {
        name: data.name,
        email: data.email,
        token: data.token,
        role: data.role,
        _id: data._id,
      },
    });
    return data;
  } catch (error) {
    store.dispatch({
      type:"LOGIN_FAILED"
    });
    // delete localstorage
  }
  
}