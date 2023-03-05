import { atom, onMount } from "nanostores";
import { themes } from "../config";
type ThemeKey = typeof themes[number];

export const theme = atom<ThemeKey>("dark");

theme.listen((value) => {
  document.body.dataset.theme = value;
});
