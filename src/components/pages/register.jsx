import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ email, password });
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6">
      <h2 className="text-xl mb-4">Register</h2>
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
      <button className="w-full bg-green-500 text-white p-2">
        Register
      </button>
    </form>
  );
}
