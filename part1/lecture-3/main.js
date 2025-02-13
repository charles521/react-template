function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const usernameClass = username.length > 2 ? "input" : "input-error";
  const passwordClass = password.length > 2 ? "input" : "input-error";

  const handleSubmit = (event) => {
    event.preventDefault();

    if (usernameClass !== "input" || passwordClass !== "input") {
      alert("username or password is required");
      return;
    }
    console.log(`用户名：${username} 密码：${password}`);
    setUsername("");
    setPassword("");
  };

  return (
    <main style={{ border: "1px solid #000" }}>
      <h2 className="title">Login From</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label className="label" htmlFor="username">
            用户名
          </label>
          <input
            className={usernameClass}
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            密码
          </label>
          <input
            className={passwordClass}
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
