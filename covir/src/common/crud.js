// './firebase.js';
import { ref } from './firebase.js';

const manage={
    addUtente:function(utenteobj,mail){
        //convertire json
        console.log("spnie");
        console.log(utenteobj);
         ref.collection("richiedenti").doc(mail)
            .set(utenteobj)
            .then(() => {
                console.log('User added!');
            });
    }
}

export const db=manage; 
//Il comando export è utilizzato per esportare funzioni, oggetti o tipi primitivi da un dato file (o modulo) in modo tale da poter essere riutilizzati in altri file con il comando import