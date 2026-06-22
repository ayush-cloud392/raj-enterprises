import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (
      username === "admin" &&
      password === "raj123"
    ) {
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Raj Enterprises Admin Login</h1>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
        }}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
        }}
      />

      <br />

      <button onClick={login}>
        Login
      </button>
    </div>
  );
}

export default Login;