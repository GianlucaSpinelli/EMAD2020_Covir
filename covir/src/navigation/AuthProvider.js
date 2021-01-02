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
              var vol= null;
              var ric= null;
              vol = await db.getVolontarioByMail(email);
              console.log("volontario:");
              console.log(vol);
              ric = await db.getRichiedenteByMail(email);
              console.log("richiedente:");
              console.log(ric);
              if(vol==null && ric != null) setTipo("1"); else if(ric==null && vol!= null) setTipo("2");
              await auth.signInWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
          register: async (utenteobj,isSelected) => {
            try {
              if(isSelected==true){
                db.addVolontario(utenteobj);
              }
              else{
                const utenteric={email:utenteobj.email, nome:utenteobj.nome, cognome:utenteobj.cognome, datanascita:utenteobj.datanascita, descrizione:utenteobj.descrizione, password:utenteobj.password};
                db.addUtente(utenteric);
              }
              await auth.createUserWithEmailAndPassword(utenteobj.email, utenteobj.password);
            } catch (e) {
              console.log(e);
            }
          },
          logout: async () => {
            try {
              setUser(null);
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

  