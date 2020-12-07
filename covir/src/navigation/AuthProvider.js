import React, { createContext, useState } from 'react';
import {auth} from '../common/firebase';
import { db } from '../common/crud';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    return (
      <AuthContext.Provider
        value={{
          user,
          setUser,
          login: async (email, password) => {
            try {
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

  