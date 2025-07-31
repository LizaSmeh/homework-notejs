import { createContext, useState } from "react";
import { useRequestAdd, useRequestGet } from "../hooks";

export const AppContext = createContext(null);

export const AppProvaider = ({ children }) => {
  const [newNote, setNewNote] = useState("");
  const { requestAddNote } = useRequestAdd(newNote, setNewNote);

  const [updateNote, setUpdateNote] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const { isLoading, notes } = useRequestGet();

  const value = {
    updateNote,
    setUpdateNote,
    showConfirm,
    setShowConfirm,
    isEditing,
    setIsEditing,
    saving,
    setSaving,
    newNote,
    setNewNote,
    requestAddNote,
    query,
    setQuery,
    active,
    setActive,
    isLoading,
    notes,
  };
  return <AppContext value={value}>{children}</AppContext>;
};
