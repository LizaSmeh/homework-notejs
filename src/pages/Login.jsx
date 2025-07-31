import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvaider";
import { Button, Group, TextInput, NumberInput } from "@mantine/core";

export const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleSumbit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username");
    auth.singin(username, () => {
      navigate(from), { replace: true };
    });
  };
  
  return (
    <>
      <form
        onSubmit={handleSumbit}
        style={{ position: "absolute", left: "40%" }}
      >
        <TextInput
          label="Имя:"
          placeholder="Введите имя..."
          withAsterisk
          name="username"
        />
        <Group justify="center" mt="md">
          <Button variant="outline" color="pink" type="submit">
            Войти
          </Button>
        </Group>
      </form>
    </>
  );
};
