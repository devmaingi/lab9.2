import { useState } from "react";
import ColorInput from "./ColorInput.tsx";

function ColorPicker() {
  const [color, setColor] = useState("white");

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
  };

  return (
    <div style={{ backgroundColor: color, height: "30px", marginTop: "10px" }}>
      <h3>Color Picker: {color}</h3>
      <ColorInput onColorChange={handleColorChange} />
    </div>
  );
}

export default ColorPicker;
