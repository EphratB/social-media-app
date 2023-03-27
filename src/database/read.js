import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export async function load() {
  try {
    console.log("loading ...");

    const querySnapshot = await getDocs(collection(db, "posts"));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    return data; // this is not returning the data rather it is returning a promise and the App.js async will handle the result
  } catch (err) {
    throw new Error("Failed to load the database");
  }
}
export function loadById(id) {
  console.log("Load Id:", id);
}
