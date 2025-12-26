import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = login(email, password);
    if (user) navigate("/products");
    else alert("Invalid credentials");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6">
      <h2 className="text-xl mb-4">Login</h2>
      <input
        className="w-full p-2 mb-2 border"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 mb-4 border"
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button className="w-full bg-blue-500 text-white p-2">
        Login
      </button>
    
    </form>
  );
}
