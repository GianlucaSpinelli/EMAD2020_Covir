// './firebase.js';
import { ref } from './firebase.js';

const manage={
    addUtente:function(utenteobj){
         ref.collection("richiedenti").add(utenteobj)      //.doc("spinelli@gmail.it").set(obj)
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
    },
    addAppuntamento:function(appuntamentoobj){
        ref.collection("appuntamenti").add(appuntamentoobj)
           .then(function(docRef) {
               //prenotare lo slot
               console.log('appuntamento id',docRef.id);
           }).catch(function(error) {
               console.error("Error writing document: ", error);
           });
   },
   addSlot:function(slotobj){
    ref.collection("slot").add(slotobj)
       .then(function(docRef) {
           //aggiornare il numero di slot messi a disposzione dal volontario di quello slot
           console.log('slot id',docRef.id);
       }).catch(function(error) {
           console.error("Error writing document: ", error);
       });
    },
    removeSlot:function(chiaveslot){
        ref.collection("slot").doc(chiaveslot).delete()
        .then(function() {
            console.log("Document successfully deleted!");
            //rimuovere l'appuntamento a cui fa riferimento
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    },
    removeAppuntamento: async function(idslot){
        /*
        ref.collection("richiedenti").doc(chiaveapp).delete()
        .then(function() {
            console.log("Document successfully deleted!");
            //mettere a "libero" lo slot a cui fa riferimento e togliergli da lì la chiave esterna
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
        */
            console.log("id"+idslot);
            var docref = ref.collection("appuntamenti").where("idslot","==",idslot).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                   console.log("eleminato"+docref); 
                   doc.ref.delete();
                   window.location.reload(false);
               })
            });
          try {
            await docref;
          } catch (error) {
            console.log(error);
          }
    },
    //AGGIUNGERE I RETURN AI GET
    getAppuntamento:function(chiaveappuntamento){
        var docRef = ref.collection("appuntamenti").doc(chiaveappuntamento);
        return docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });        
    },
    getSlot:async function(chiaveslot){
        var slot;
        const n = ref.collection("slot").doc(chiaveslot).get().then(function(doc) {
            if (doc.exists) {
                slot= doc.data();
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        });
        try {
            await n;
            return slot;
        } catch (error) {
            
        } 
    },
    
    getAllAppuntamentiByUtente: async   function(emailutente){ //FUNONZ
        //return await ref.collection("appuntamenti").where("mailrichiedente", "==", emailutente)
       //.get();
       var lista = [];
       const n =  ref.collection("appuntamenti").where("mailrichiedente", "==",emailutente).get().then(querySnapshot => {
        
        querySnapshot.forEach(doc => {
                console.log("app:"+doc.data());
                lista.push(doc.data());
                
           })
           
       });
       try {
           await n;
           return lista;
       } catch (error) {
           
       }       
   },
    

   /* getAllAppuntamentiByUtente:async function(emailutente){ //FUNONZ
         //return await ref.collection("appuntamenti").where("mailrichiedente", "==", emailutente)
        //.get();
        return await ref.collection("appuntamenti").where("mailrichiedente", "==", emailutente)
        .get()
        .catch(function(error) {
            console.log("GIORDANO");
            console.log("Error getting documents: ", error);
        });    
    },*/
    getAllAppuntamentiByVolontario:async function(emailvolontario){
        return await ref.collection("appuntamenti").where("mailvolontario", "==", emailvolontario)
        .get();
    },
    getAllSlotByVolontario:function(emailvolontario){
        return ref.collection("slot").where("email", "==", emailvolontario).orderBy("data","asc")
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        })
        .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
    },
    getUtente:async function(chiaveutente){  //FUNONZ
        return await ref.collection("richiedenti").doc(chiaveutente).get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });        
    },
    getVolontario:function(chiavevolontario){
        var docRef = ref.collection("volontari").doc(chiavevolontario);
        return docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });        
    },
    getVolontariByEta:function(eta){
        return ref.collection("volontari").where("eta", ">=", eta)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        })
        .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
    },
    getVolontarioByMail:function(mail){
        return ref.collection("volontari").where("email", "==", mail)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        })
        .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
    },
    getRichiedenteByMail:function(mail){
        return ref.collection("richiedenti").where("email", "==", mail)
        .get()
        .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
        })
        .catch(function(error) {
        console.log("Error getting documents: ", error);
        });
    },
    modificaPasswordUtente:function(chiaveutente,nuovapassword){
        ref.collection("richiedenti").doc(chiaveutente).update({password: nuovapassword});
    },
    modificaPasswordVolontario:function(chiavevolontario,nuovapassword){
        ref.collection("volontari").doc(chiavevolontario).update({password: nuovapassword});
    },
    modificaNumAppuntamentiUtente:function(chiaveutente,nuovonumero){//piu 1 o meno 1 passato
        ref.collection("richiedenti").doc(chiaveutente).update({numeroappuntamenti: nuovonumero});
    },
    modificaNumAppuntamentiVolontario:function(chiavevolontario, nuovonumero){//piu 1 o meno 1 passato
        ref.collection("volontari").doc(chiavevolontario).update({numeroappuntamenti: nuovonumero});
    },
    modificaNumSlotVolontario:function(chiavevolontario, nuovonumero){
        ref.collection("volontari").doc(chiavevolontario).update({numeroslot: nuovonumero});
    },
}

export const db=manage; 
//Il comando export è utilizzato per esportare funzioni, oggetti o tipi primitivi da un dato file (o modulo) in modo tale da poter essere riutilizzati in altri file con il comando import