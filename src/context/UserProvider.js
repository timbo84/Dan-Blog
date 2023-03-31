import axios from "axios";
import UserContext from "./UserContext";
import { useState } from "react";
//maybe
export const UserProvider = (props) => {
    const [ userList, setUserList ] = useState([]);
    const baseUrl =  "http://localhost:8800/User/";


     // user name not email
    async function Login(username, password) {
      let signin = {username, password};
        const response = await axios.post(`${baseUrl}login`, signin);
        localStorage.setItem('myMessageToken', response.data);
        localStorage.setItem('username', username); 
        return await new Promise(resolve => resolve(response.data));

    }  
    
//yes
    async function getUserById(userId) {
        
        return axios.get(baseUrl + userId).then(response => {
          console.log(response.data)
          return new Promise(resolve => resolve(response.data));
        })
    }

   
    return (
        <UserContext.Provider value={{
            userList, //y
            getUserById, //y
            Login, //y
        }}>
            { props.children }
        </UserContext.Provider>
    )
}