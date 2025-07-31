import { useNavigate, useParams } from "react-router-dom";
import {
  useRequestGetNote,
  useRequestDelete,
  useRequestUpdate,
} from "../hooks";
import { useEffect, useRef, useContext } from "react";
import { AppContext } from "../context";
import { Textarea, Button, Modal, Group, Text } from "@mantine/core";

export const Note = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    updateNote,
    setUpdateNote,
    showConfirm,
    setShowConfirm,
    isEditing,
    setIsEditing,
    saving,
    setSaving,
  } = useContext(AppContext);

  const { requestUpdateNote } = useRequestUpdate(id, updateNote, setIsEditing);
  const { requestDeleteNote } = useRequestDelete(navigate, id);
  const { notes, setNotes } = useRequestGetNote(id);

  useEffect(() => {
    if (isEditing && notes?.content) {
      setUpdateNote(notes.content);
    }
  }, [isEditing, notes]);

  const confirmDelete = () => {
    requestDeleteNote();
    setShowConfirm(false);
  };

  const timeoutRef = useRef(null);

  const handeleChange = (e) => {
    setUpdateNote(e.target.value);
    setIsEditing(true);
  };

  useEffect(() => {
    if (!isEditing) return;

    setSaving(true);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      requestUpdateNote(updateNote);
      setSaving(false);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [updateNote, isEditing]);

  return (
    <>
      {isEditing ? (
        <Textarea
          minRows={30}
          maxRows={100}
          style={{ width: "50vw" }}
          autosize
          type="text"
          value={updateNote}
          onChange={handeleChange}
          name="textUpdate"
        />
      ) : (
        <Group justify="space-between">
          <Text size="xl" onClick={() => setIsEditing(true)}>
            {notes.content}
          </Text>
          <Button
            variant="outline"
            color="pink"
            onClick={() => {
              setShowConfirm(true);
            }}
          >
            Удалить
          </Button>
        </Group>
      )}
      <Modal
        opened={showConfirm}
        onClose={() => setShowConfirm(false)}
        title="Удаление:"
        centered={false}
        style={{ position: "absolute", top: "50%", left: "0%" }}
      >
        <Text>Вы действительно хотитете удалить эту заметку?</Text>
        <Group justify="flex-end">
          <Button variant="default" onClick={() => setShowConfirm(false)}>
            Нет
          </Button>
          <Button color="red" onClick={confirmDelete}>
            Да
          </Button>
        </Group>
      </Modal>
    </>
  );
};
