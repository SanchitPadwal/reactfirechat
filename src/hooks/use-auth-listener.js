import React,{useState, useEffect} from "react";
import {auth} from '../lib/firebase';
export default function UseAuthListener() {
  const [user , setuser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );


  useEffect(() => {
    const listener = auth.onAuthStateChanged(authUser => {
      if(authUser){
        localStorage.setItem('authUser' , JSON.stringify(authUser));
        setuser(authUser)
      }else {
        localStorage.removeItem('authUser');
        setuser(null);
      }
    });
    
    return () => listener; 

  }, [])
  return user;
}
