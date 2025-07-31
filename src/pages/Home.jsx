import { useContext } from "react";
import { AppContext, useAuth } from "../context";
import { useNavigate } from "react-router-dom";
import { Flex, Button, Textarea, Title, Group } from "@mantine/core";

export const Home = () => {
  const { newNote, setNewNote, requestAddNote } = useContext(AppContext);
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <Group justify="flex-end">
        {auth.user !== null ? (
          <Flex>
            <Textarea
              minRows={30}
              maxRows={100}
              style={{ width: "50vw" }}
              autosize
              type="text"
              value={newNote}
              onChange={(event) => setNewNote(event.target.value)}
              placeholder="Введите заметку..."
            />
            <Button
              variant="outline"
              color="pink"
              onClick={requestAddNote}
              style={{ marginLeft: "30px" }}
            >
              Добавить
            </Button>
          </Flex>
        ) : (
          <Title order={3}>
            Добро пожаловать! Для работы с заметками авторизуйтесь
            <Button
              variant="outline"
              color="pink"
              onClick={() => navigate("/login")}
            >
              Войти
            </Button>
          </Title>
        )}
      </Group>
    </>
  );
};
