import { AppShell } from "@mantine/core";
import { Header, Sidebar } from "./components";
import { Outlet } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <AppShell
        padding="md"
        header={{ height: { base: 48, sm: 60, lg: 76 } }}
        navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: false } }}
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>

        <AppShell.Navbar>
          <Sidebar />
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </>
  );
};
