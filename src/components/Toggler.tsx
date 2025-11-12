import {useState} from 'react';


function Toggler() {
    const [isOn, setIsOn] = useState(false);
  return (
    <div style={{ marginTop: "100px" }}>
      <p>Status: {isOn ? "On" : "Off"}</p>
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </div>
  );
}

export default Toggler;