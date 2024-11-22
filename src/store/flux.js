import { useParams } from "react-router-dom";

const getState = ({ getActions, getStore, setStore }) => {
  return {
    store: {
      users: [
        {nombre_usuario: "",
        email :"",
        contraseña: ""}
      ]
    },
    actions: {  
      createUser: (user) => {
        fetch("http://localhost:5050/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(user)
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.success) { 
              const store = getStore();
              setStore({ users: [...store.users, user] }); 
            }
          })
          .catch((error) => console.log(error));
      }
    },
  };
};
export default getState;
