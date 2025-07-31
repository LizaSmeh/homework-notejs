import { ref, set } from "firebase/database";
import { db } from "../firebase";

export const useRequestUpdate = (id, updateNote, setIsEditing) => {
  const requestUpdateNote = () => {
    const notesDbRef = ref(db, `notes/${id}`);
    set(notesDbRef, {
      content: updateNote,
    });
    setIsEditing(false);
  };
  return { requestUpdateNote };
};
