function AppContent() {
  const [bgClass, setBgClass] = React.useState("");
  const [textColor, setTextColor] = React.useState("");
  const [circleSize, setCircleSize] = React.useState(150);
  const [circleRotate, setCircleRotate] = React.useState(0);

  return (
    <main>
      <label>
        Purpel
        <input
          type="checkbox"
          onChange={(event) => setBgClass(event.target.checked ? "purple" : "")}
        />
      </label>
      <label>
        text color
        <select onChange={(event) => setTextColor(event.target.value)}>
          <option value="text-white" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>
      <label>
        Circle Size
        <input
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
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
