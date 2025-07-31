import { Route, Routes } from "react-router-dom";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { Menu, PrivateRoute } from "./components";
import { AuthProvaider } from "./context";
import { Login, Home, Note, Error } from "./pages";

function App() {
  return (
    <>
      <MantineProvider>
        <AuthProvaider>
          <Routes>
            <Route path="/" element={<Menu />}>
              <Route index element={<Home />} />
              <Route
                path="/notes/:id"
                element={
                  <PrivateRoute>
                    <Note />
                  </PrivateRoute>
                }
              />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </AuthProvaider>
      </MantineProvider>
    </>
  );
}

export default App;
