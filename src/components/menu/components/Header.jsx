import { AuthStatus } from "../../AuthStatus";
import { ActionIcon, Flex } from "@mantine/core";
import { IconCircleDashedPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex mih={50} gap="md" justify="center" align="center" direction="row">
        <AuthStatus />
        <ActionIcon color="pink" onClick={() => navigate("/")}>
          <IconCircleDashedPlus stroke={2} />
        </ActionIcon>
      </Flex>
    </>
  );
};
