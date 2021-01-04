import React, { createContext, useState } from 'react';
import {auth} from '../common/firebase';
import { db } from '../common/crud';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tipo,setTipo] = useState("");  
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
              var vol= await db.getVolontarioByMail(email);
              console.log("volontario:");
              console.log(vol);
              var ric= await db.getRichiedenteByMail(email);
              if(vol==null) setTipo("1"); else if(ric=null) setTipo("2");
              await auth.signInWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
          register: async (utenteobj,isSelected) => {
            try {
              if(isSelected==true){
                db.addUtente(utenteobj);
              }
              else{
                const utenteric={email:utenteobj.email, nome:utenteobj.nome, cognome:utenteobj.cognome, datanascita:utenteobj.datanascita, cellulare:utenteobj.cellulare, password:utenteobj.password};
                db.addUtente(utenteric);
              }
              await auth.createUserWithEmailAndPassword(utenteobj.email, utenteobj.password);
            } catch (e) {
              console.log(e);
            }
          },
          logout: async () => {
            try {
              setTipo("");
              await auth.signOut();
            } catch (e) {
              console.error(e);
            }
          }
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };

  