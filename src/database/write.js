import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";

export async function save(data) {
  try {
    const docRef = await addDoc(collection(db, "posts"), data);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export async function update(id, data) {
  try {
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, data);
    console.log("Document updated successfully.");
    return true;
  } catch (e) {
    console.error("Error updating document: ", e);
    return false;
  }
}
