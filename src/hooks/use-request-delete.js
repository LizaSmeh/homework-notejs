import { ref, remove } from "firebase/database";
import { db } from "../firebase";

export const useRequestDelete = (navigate, id) => {
  const requestDeleteNote = () => {
    const notesDbRef = ref(db, `notes/${id}`);
    remove(notesDbRef);
    navigate("/");
  };
  return { requestDeleteNote };
};
