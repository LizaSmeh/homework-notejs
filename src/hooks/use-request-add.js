import { ref, push } from "firebase/database";
import { db } from "../firebase";

export const useRequestAdd = (newNote, setNewNote) => {
  const requestAddNote = () => {
    const notesDbRef = ref(db, "notes");
    push(notesDbRef, {
      content: newNote,
    });
    setNewNote("");
  };
  return { requestAddNote };
};
