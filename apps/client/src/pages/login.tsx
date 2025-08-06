import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/auth";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await axios.post("/api/login", {
      username,
      password,
    });
    if (data.token) {
      setToken(data.token);
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
