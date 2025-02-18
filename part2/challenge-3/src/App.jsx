import { useState } from "react";
import AppInput from "./components/AppInput";
import "./App.css";

function App() {
  const [bgClass, setBgClass] = useState("");
  const [textColor, setTextColor] = useState("");
  const [circleSize, setCircleSize] = useState(150);
  const [circleRotate, setCircleRotate] = useState(0);

  return (
    <>
      <main>
        <label>
          Purpel
          <input
            type="checkbox"
            onChange={(event) =>
              setBgClass(event.target.checked ? "purple" : "")
            }
          />
        </label>
        <label>
          text color
          <select
            defaultValue="text-white"
            onChange={(event) => setTextColor(event.target.value)}
          >
            <option value="text-white">White</option>
            <option value="text-black">Black</option>
            <option value="text-orange">Orange</option>
          </select>
        </label>
        <label>
          Circle Size
          <AppInput
            type="number"
            value={circleSize}
            onChange={(event) => setCircleSize(event.target.value)}
          />
        </label>

        <label>
          Circle Rotate
          <input
            type="number"
            value={circleRotate}
            onChange={(event) => setCircleRotate(event.target.value)}
          />
        </label>
        <div
          className={`circle ${bgClass} ${textColor}`}
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            lineHeight: `${circleSize}px`,
            transform: `rotate(${circleRotate}deg)`,
          }}
        >
          Hi!
        </div>
      </main>
    </>
  );
}

export default App;
