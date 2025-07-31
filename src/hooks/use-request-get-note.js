import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../firebase";

export const useRequestGetNote = (id) => {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const notesDbRef = ref(db, `notes/${id}`);
    return onValue(notesDbRef, (snapshot) => {
      const loadedNotes = snapshot.val();
      setNotes(loadedNotes);
      setIsLoading(false);
    });
  }, [id]);

  return {
    isLoading,
    notes,
  };
};
