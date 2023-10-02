import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../config/firestore";
import AddNew from "./AddNew";

const ChildrenList = ({ path }) => {
  const collectionRef = collection(db, "fashion/item1/variants");
  const [docs, loading, error] = useCollectionData(collectionRef);

  // console.log(docs);
  return (
    <ul>
      {docs?.map((doc) => (
        <li key={Math.random()}>{doc.name}</li>
      ))}
      <AddNew path={path} />
    </ul>
  );
};

export default ChildrenList;
