// './firebase.js';
import { ref,dbref } from './firebase.js';

const manage={
    addUtente:function(utenteobj){
         ref.collection("utente").add(utenteobj)      //.doc("spinelli@gmail.it").set(obj)
            .then(function(docRef) {
                console.log('User id',docRef.id);
            }).catch(function(error) {
                console.error("Error writing document: ", error);
            });
    },
    
    addVolontario:function(utenteobj){
         ref.collection("utente").add(utenteobj)
            .then(function(docRef) {
                console.log('User id',docRef.id);
            }).catch(function(error) {
                console.error("Error writing document: ", error);
            });
    },
    addAppuntamento:function(id,appuntamentoobj){
        this.setSlotOccupato(id);
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
           console.log('slot id',docRef.id);
       }).catch(function(error) {
           console.error("Error writing document: ", error);
       });
    },
   
    removeAppuntamentoBS:  async function(idslot){
            
        var docref = ref.collection("appuntamenti").where("idslot","==",idslot).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                   console.log("eleminato"+docref); 
                   doc.ref.delete();
                
               })
            });
          try {
            await docref;
          } catch (error) {
            console.log(error);
          }
    },

    removeAppuntamento: async function(chiave,idslot){
        this.setSlotNOTOccupato(chiave);
            
        console.log("id"+idslot);
        var docref = ref.collection("appuntamenti").where("idslot","==",idslot).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                   console.log("eleminato"+docref); 
                   doc.ref.delete();
                
               })
            });
          try {
            await docref;
          } catch (error) {
            console.log(error);
          }
    },
    removeSlot: async function(idslot){
        
        console.log("id"+idslot);
        var docref = ref.collection("slot").where("id","==",idslot).get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
               console.log("eleminato"+docref); 
               doc.ref.delete();
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

    addCallLink: async function (ids,link) {
        ref.collection("appuntamenti").doc(ids).update({linkCall: link});
    },

    getSlot:async function(chiave){
        var slot;
        var lista = [];
        if (chiave != null) {
        const n = ref.collection("slot").where("id","==",chiave).get().then(querySnapshot  => {
            querySnapshot.forEach(doc => {
                console.log("app:"+doc.data());
                lista.push(doc.data());
                
           })
        });
        try {
            await n;
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return lista[0];
    },
    getAppBySlot:async function(chiave){

        var lista = [];
        console.log("SONO IN GET APPOBJ"+chiave);
        if (chiave != null) {
        const n = ref.collection("appuntamenti").where("idslot","==",chiave).get().then(querySnapshot  => {
            querySnapshot.forEach(doc => {
                console.log("app:"+doc.data());
                lista.push(doc.data());
                
           })
        });
        try {
            await n;
            console.log(lista[0]);
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return lista[0];
    },

    getAppBySlotOBJ:async function(chiave){

        var slot;
        var lista = [];
        if (chiave != null) {
        const n = ref.collection("appuntamenti").where("idslot","==",chiave).get().then(querySnapshot  => {
            querySnapshot.forEach(doc => {
                console.log("app:"+doc.data());
                lista.push(doc);
                
           })
        });
        try {
            await n;
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return lista[0];
    },

    getAllSlot:async function(){
        var lista = [];
        const n = ref.collection("slot").orderBy('id','desc').get().then(querySnapshot  => {
            querySnapshot.forEach(doc => {
                console.log("slot spinelliiiiiiiiiiiiii:"+doc.data());
                lista.push(doc.data());
                
           })
        });
        try {
            await n;
            return lista;
        } catch (error) {
            
        } 
    },

    getSlotObj:async function(chiave){
        var slot;
        var lista = [];
        if (chiave != null) {
        const n = ref.collection("slot").where("id","==",chiave).get().then(querySnapshot  => {
            querySnapshot.forEach(doc => {
                console.log("app:"+doc.data());
                lista.push(doc);
                
           })
        });
        try {
            await n;
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return lista[0];
    },
    getUtenteObj:async function(chiave){
        var slot;
        var lista = [];
        if (chiave != null) {
        const n = ref.collection("utente").where("email","==",chiave).get().then(querySnapshot  => {
            querySnapshot.forEach(doc => {
                console.log("app:"+doc.data());
                lista.push(doc);
                
           })
        });
        try {
            await n;
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return lista[0];
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
   getAllAppuntamentiByVol: async   function(emailutente){ //FUNONZ
    //return await ref.collection("appuntamenti").where("mailrichiedente", "==", emailutente)
   //.get();
   var lista = [];
   const n =  ref.collection("appuntamenti").where("mailvolontario", "==",emailutente).get().then(querySnapshot => {
    
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
getAllSlotByVol: async   function(emailutente){ //FUNONZ
    //return await ref.collection("appuntamenti").where("mailrichiedente", "==", emailutente)
   //.get();
   var lista = [];
   const n =  ref.collection("slot").where("chiavevolontario", "==",emailutente).get().then(querySnapshot => {
    
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

    getAllSlotByVolontario:async function(emailvolontario){
       
        var lista = [];
        if (emailvolontario != null) {
        const n =  ref.collection("slot").where("chiavevolontario", "==",emailvolontario).get().then(querySnapshot => {
         
         querySnapshot.forEach(doc => {
                 console.log("entrato nel foreach:"+doc.data());
                 lista.push(doc.data());
                 
            })
            
        });
        try {
            await n;
            return lista;
        } catch (error) {
        } 
    }
    else return lista;  
    },
    getUtente:async function(chiaveutente){  //FUNONZ
        return await ref.collection("utente").doc(chiaveutente).get().then(function(doc) {
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
        var docRef = ref.collection("utente").doc(chiavevolontario);
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
    getAllVolontari:async function(){
       var listaVolo = [];
       const m =  ref.collection("utente").where("tipo","==","volontario").get().then(querySnapshot => {
        
        querySnapshot.forEach(doc => {
                console.log("appVolo:"+doc.data());
                listaVolo.push(doc.data());
                
           })
           
       });
       try {
           await m;
           return listaVolo;
       } catch (error) {
           
       }    
    },
    getUtenteByMail:async function(mail){
        var lista = [];
        if (mail != null) {
        const n = ref.collection("utente").where("email","==",mail).get().then(querySnapshot  => {
            
            querySnapshot.forEach(doc => {
                console.log("utente trovato:"+doc.data());
                lista.push(doc.data());
                
           })
        });
        try {
            await n;
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return null;
    },
    getRichiedenteByMail:async function(mail){
        var lista = [];
        if (mail != null) {
        const n = ref.collection("utente").bwhere("email","==",mail).get().then(querySnapshot  => {
            
            querySnapshot.forEach(doc => {
                console.log("utente trovato:"+doc.data());
                lista.push(doc.data());
           })
        });
        try {
            await n;
            return lista[0];
        } catch (error) {
            
        } 
    }
    else return null;
    },
    modificaPasswordUtente:function(chiaveutente,nuovapassword){
        ref.collection("utente").doc(chiaveutente).update({password: nuovapassword});
    },
    modificaPasswordVolontario:function(chiavevolontario,nuovapassword){
        ref.collection("utente").doc(chiavevolontario).update({password: nuovapassword});
    },
    setSlotOccupato: function(ids) {
        ref.collection("slot").doc(ids).update({occupato: true});
    },
    setSlotNOTOccupato: function(id) {
        ref.collection("slot").doc(id).update({occupato: false});
    },
    setDescrizione: function(id,desc) {
        ref.collection("utente").doc(id).update({descrizioneUtente: desc});
    }
}

export const db=manage; 
//Il comando export è utilizzato per esportare funzioni, oggetti o tipi primitivi da un dato file (o modulo) in modo tale da poter essere riutilizzati in altri file con il comando import