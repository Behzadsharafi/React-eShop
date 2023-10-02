import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getAllItems = async () => {
  const collectionRef = collection(db, "fashion");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getVariants = async (id) => {
  const collectionRef = collection(db, `fashion/${id}/variants`);
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getItemById = async (id) => {
  const docRef = doc(db, "fashion", id);
  const querySnapshot = await getDoc(docRef);
  if (!querySnapshot.exists()) {
    throw new Error("Document not found");
  }
  return { id: querySnapshot.id, ...querySnapshot.data() };
};

// export const getVariantById = async () => {
//   const collectionRef = collection(db, "fashion/variants/blue");
//   const querySnapshot = await getDocs(collectionRef);
//   return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

// export const getVariantsById = async (id) => {
//   const docRef = doc(db, "fashion/variants/blue", id);
//   const querySnapshot = await getDoc(docRef);
//   if (!querySnapshot.exists()) {
//     throw new Error("Document not found");
//   }
//   return { id: querySnapshot.id, ...querySnapshot.data() };
// };
