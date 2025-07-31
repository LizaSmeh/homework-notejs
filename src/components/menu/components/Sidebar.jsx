import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../context";
import { useSearch } from "../../../hooks";
import { Stack, NavLink, Input } from "@mantine/core";

export const Sidebar = () => {
  const { notes, query, setActive, setQuery, active } = useContext(AppContext);
  const navigate = useNavigate();
  const results = useSearch({ data: notes, searchTerm: query });

  const handelClickNote = (index, id) => {
    setActive(index);
    navigate(`/notes/${id}`);
  };

  const textOneLine = (text, maxLength = 30) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <Input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Stack
        bg="var(--mantine-color-body)"
        align="flex-start"
        justify="center"
        gap="sm"
      >
        {(query ? results : Object.entries(notes)).map(
          ([id, { content }], index) => (
            <NavLink
              active={index === active}
              key={id}
              onClick={() => handelClickNote(index, id)}
              label={textOneLine(content)}
              color="pink"
            />
          )
        )}
      </Stack>
    </>
  );
};
