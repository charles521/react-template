function AppContent() {
  return (
    <main>
      <label>
        Purpel
        <input type="text" />
      </label>
      <label>
        text color
        <select>
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-green">Green</option>
        </select>
      </label>
      <label>
        Circle Size
        <input type="number" value="150" />
      </label>

      <div className="circle purple">Hi!</div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
