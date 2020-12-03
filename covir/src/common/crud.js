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
    },
    addAppuntamento:function(appuntamentoobj){
        ref.collection("appuntamenti").add(appuntamentoobj)
           .then(function(docRef) {
               //aggiornare numero appuntamenti al volontario e al richiedente
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
            //aggiornare numero slot del volontario dello slot tolto
            console.log("Document successfully deleted!");
            //rimuovere l'appuntamento a cui fa riferimento
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    },
    removeAppuntamento:function(chiaveapp){
        ref.collection("richiedenti").doc(chiaveapp).delete()
        .then(function() {
            //aggiornare numero appuntamenti del volontario dell appuntamento tolo
            console.log("Document successfully deleted!");
            //mettere a "libero" lo slot a cui fa riferimento e togliergli da lì la chiave esterna
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
    },
    //AGGIUNGERE I RETURN AI GET
    getAppuntamento:function(chiaveappuntamento){
        var docRef = ref.collection("appuntamenti").doc(chiaveappuntamento);
        docRef.get().then(function(doc) {
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
    getSlot:function(chiaveslot){
        var docRef = ref.collection("slot").doc(chiaveslot);
        docRef.get().then(function(doc) {
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
    getAllAppuntamentiByUtente:function(emailutente){
        ref.collection("appuntamenti").where("emailrichiedente", "==", emailutente).orderBy("data","asc")
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
    getAllAppuntamentiByVolontario:function(emailvolontario){
        ref.collection("appuntamenti").where("emailvolontario", "==", emailvolontario).orderBy("data","asc")
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
    getAllSlotByVolontario:function(emailvolontario){
        ref.collection("slot").where("email", "==", emailvolontario).orderBy("data","asc")
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
    getUtente:function(chiaveutente){
        var docRef = ref.collection("richiedenti").doc(chiaveutente);
        docRef.get().then(function(doc) {
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
        docRef.get().then(function(doc) {
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
        ref.collection("volontari").where("eta", ">=", eta)
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