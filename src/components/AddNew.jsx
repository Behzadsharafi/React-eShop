import { doc, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../config/firestore";

const AddNew = ({ path }) => {
  const name = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const docRef = doc(db, path, name.current.value);
    await setDoc(docRef, { name: name.current.value });

    e.target.reset();
  };

  return (
    <li>
      <form onSubmit={handleSubmit}>
        <input ref={name} />
        <button type="submit">Add</button>
      </form>
    </li>
  );
};

export default AddNew;
