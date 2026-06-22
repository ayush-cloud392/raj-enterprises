import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function Admin() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  if (!loggedIn) {
    return (
      <Login
        onLogin={() => setLoggedIn(true)}
      />
    );
  }

  return <Dashboard />;
}

export default Admin;