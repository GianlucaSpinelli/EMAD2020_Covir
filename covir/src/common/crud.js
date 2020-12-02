// './firebase.js';
import { ref } from './firebase.js';

const manage={
    addUtente:function(utenteobj){
         ref.collection("richiedenti").add(utenteobj)
            .then(function(docRef) {
                console.log('User id',docRef.id);
            }).catch(function(error) {
                console.error("Error writing document: ", error);
            });
    },
    addVolontario:function(utenteobj){
         ref.collection("volontari").add(utenteobj)
            .then(function(docRef) {
                console.log('User id',docRef.id);
            }).catch(function(error) {
                console.error("Error writing document: ", error);
            });
    }
}

export const db=manage; 
//Il comando export è utilizzato per esportare funzioni, oggetti o tipi primitivi da un dato file (o modulo) in modo tale da poter essere riutilizzati in altri file con il comando import