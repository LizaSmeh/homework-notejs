import { useNavigate } from "react-router-dom";
import { Button, Title } from "@mantine/core";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <Title order={3} style={{ position: "absolute", left: "40%" }}>
      Ошибка! Такой страницы нет {":("}
      <Button variant="outline" color="pink" onClick={() => navigate("/")}>
        Войти
      </Button>
    </Title>
  );
};
