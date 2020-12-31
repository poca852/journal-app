import { db } from "../firebase/firebase-config"


export const loadNote = async ( uid ) => {
   const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
   const notes = [];

   notesSnap.forEach(snapHijo => {
      notes.push({
         id: snapHijo.id,
         ...snapHijo.data()
      })
   })

   // console.log(notes);

   return notes;
}