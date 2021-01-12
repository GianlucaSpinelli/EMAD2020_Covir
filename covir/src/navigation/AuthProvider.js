import React, { createContext, useState } from 'react';
import {auth} from '../common/firebase';
import { db } from '../common/crud';
import ScegliSlotTempo from '../screens/ScegliSlotTempo';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [tipo,setTipo] = useState("");
    const [descrizioneUtente,setDescrizioneUtente] = useState("");
    const [nome,setNome] = useState(null);  
    const [cognome,setCognome] = useState(null); 
    const [emailU,setEmailU] = useState(null); 
    const [dataN,setDataN] = useState(null); 
    const [associazione,setAssociazione] = useState(null); 
    const [cellulare,setCellulare] = useState(null);
    return (
      <AuthContext.Provider
        value={{
          user,tipo,nome,cognome,emailU,dataN,associazione,cellulare,descrizioneUtente,
          setUser,setTipo,setNome,setCognome,setEmailU,setDataN,setAssociazione,setCellulare,setDescrizioneUtente,
          login: async (email, password) => {
            try {
              var temp = await db.getUtenteByMail(email);
              console.log("user login");
              console.log(temp);
              console.log(temp.tipo);
              setTipo(temp.tipo);
              setNome(temp.nome);
              setCognome(temp.cognome);
              setEmailU(temp.email);
              setDataN(temp.datanascita);
              setCellulare(temp.cellulare);
              setAssociazione(temp.associazione);
              setDescrizioneUtente(temp.descrizioneUtente);
              await auth.signInWithEmailAndPassword(email, password);
            } catch (e) {
              console.log(e);
            }
          },
          register: async (utenteobj,isSelected) => {
            try {
              if(isSelected==true){
                const utentevol={descrizioneUtente:utenteobj.descrizioneUtente,email:utenteobj.email, nome:utenteobj.nome, cognome:utenteobj.cognome, datanascita:utenteobj.datanascita, cellulare:utenteobj.cellulare, password:utenteobj.password, associazione:utenteobj.associazione, tipo:"volontario"};
                db.addUtente(utentevol);
              }
              else{
                const utenteric={descrizioneUtente:utenteobj.descrizioneUtente,email:utenteobj.email, nome:utenteobj.nome, cognome:utenteobj.cognome, datanascita:utenteobj.datanascita, cellulare:utenteobj.cellulare, password:utenteobj.password, tipo:"richiedente"};
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

  