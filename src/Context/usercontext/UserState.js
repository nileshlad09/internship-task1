import React, { useEffect, useState} from "react";
import usersContext from "./usersContext";


const UserState = (props) => {
  
  const addUserData = (data)=>{
    console.log(data);
  }
  

  return (
    <usersContext.Provider value={{addUserData}}>
      {props.children}
    </usersContext.Provider>
  );
};

export default UserState;