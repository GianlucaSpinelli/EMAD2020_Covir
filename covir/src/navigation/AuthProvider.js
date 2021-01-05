import React, { createContext, useState } from 'react';
import {auth} from '../common/firebase';
import { db } from '../common/crud';
import ScegliSlotTempo from '../screens/ScegliSlotTempo';

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
              var temp = db.getUtenteByMail(email);
              console.log("user login");
              console.log(temp);
              setTipo(temp[0].data().tipo);             
              await auth.signInWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
          register: async (utenteobj,isSelected) => {
            try {
              if(isSelected==true){
                const utentevol={email:utenteobj.email, nome:utenteobj.nome, cognome:utenteobj.cognome, datanascita:utenteobj.datanascita, cellulare:utenteobj.cellulare, password:utenteobj.password, associazione:utenteobj.associazione, tipo:"volontario"};
                db.addUtente(utentevol);
              }
              else{
                const utenteric={email:utenteobj.email, nome:utenteobj.nome, cognome:utenteobj.cognome, datanascita:utenteobj.datanascita, cellulare:utenteobj.cellulare, password:utenteobj.password, tipo:"richiedente"};
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

  