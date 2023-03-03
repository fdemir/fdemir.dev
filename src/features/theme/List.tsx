import "./List.css";
import { useStore } from "@nanostores/solid";
import { theme } from "../../store/theme";
import { themes } from "../../config";

function List() {
  // const currentTheme = useStore(theme);

  const changeTheme = (value) => theme.set(value);

  return (
    <ul className="theme-list">
      {themes.map((key) => (
        <li onClick={() => changeTheme(key)}>{key}</li>
      ))}
    </ul>
  );
}

export default List;
