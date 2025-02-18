import { useState } from "react";
import AppInput from "./components/AppInput";
import AppButton from "./components/AppButton";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <>
      <main style={{ border: "1px solid #000" }}>
        <h2 className="title">Login From</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="label" htmlFor="username">
              用户名
            </label>
            <AppInput
              type="text"
              className={usernameClass}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">
              密码
            </label>
            <AppInput
              type="password"
              className={passwordClass}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <AppButton className="btn" type="submit">
            Login
          </AppButton>
          <AppButton className="btn" type="submit">
            <span style={{ color: "red" }}>Register</span>
          </AppButton>
        </form>
      </main>
    </>
  );
}

export default App;
