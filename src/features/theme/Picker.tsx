import "./Picker.css";
import List from "./List";
import rainbow from "./rainbow.svg?raw";
import { createSignal } from "solid-js";

function Picker() {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <div className="rainbow-btn" onClick={() => setIsOpen(!isOpen())}>
        <span innerHTML={rainbow}></span>
      </div>

      {/* TODO: load the list element when it is visible */}
      {isOpen() && <List />}
    </>
  );
}

export default Picker;
