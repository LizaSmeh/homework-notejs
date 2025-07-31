import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { IconLogout } from "@tabler/icons-react";
import { ActionIcon, Title, Flex } from "@mantine/core";

export const AuthStatus = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSingout = () => {
    auth.singout(() => navigate("/"));
  };

  if (auth.user === null) {
    return <Title order={3}>Вы не авторизованы.</Title>;
  }
  return (
    <>
      <Flex mih={50} gap="md" justify="center" align="center" direction="row">
        <Title order={3}>Добро пожаловать : {auth.user}</Title>
        <ActionIcon color="pink" onClick={handleSingout}>
          <IconLogout stroke={2} />
        </ActionIcon>
      </Flex>
    </>
  );
};
