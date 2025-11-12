interface ColorInputProps {
  onColorChange: (color: string) => void;
}

function ColorInput({ onColorChange }: ColorInputProps) {
  return (
    <div>
      <h2>Color Input Component</h2>
      <input
        type="text"
        placeholder="Enter color here"
        onChange={(e) => onColorChange(e.target.value)}
      />
    </div>
  );
}
export default ColorInput;
