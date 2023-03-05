import "./List.css";
import { theme } from "../../store/theme";
import { themes } from "../../config";

function List() {
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
