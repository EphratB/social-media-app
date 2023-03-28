import {
  collection,
  getDocs,
  where,
  query,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./config";

/**
 * Load all documents from the posts collection
 * @returns
 * array with the posts
 */

export async function load() {
  try {
    console.log("loading ...");
    const querySnapshot = await getDocs(collection(db, "posts"));
    // instead of typing the same code again we return the fucntion with a querysnpshot paramenter
    return processQuerySnapshot(querySnapshot); // this is not returning the data rather it is returning a promise and the App.js async will handle the result
  } catch (err) {
    throw new Error("Failed to load the database");
  }
}

/**
 * Loads all promoted documents from the posts collection
 * @returns
 *  Array with the posts.
 */
export async function loadPromoted() {
  try {
    const q = query(collection(db, "posts"), where("promote", "==", true));
    const querySnapshot = await getDocs(q);
    return processQuerySnapshot(querySnapshot);
  } catch (err) {
    throw new Error("Failed to query the database");
  }
}
/**Converts a Firebase query snapshot to an array.
 *
 * @param {object} querySnapshot
 * The query snapshot returned by Firebase.
 * @returns
 * Array with the data
 */
function processQuerySnapshot(querySnapshot) {
  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
}
export async function loadById(id) {
  try {
    console.log("Load Id:", id);

    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    }
  } catch (err) {
    return null;
  }
  return null;
}
