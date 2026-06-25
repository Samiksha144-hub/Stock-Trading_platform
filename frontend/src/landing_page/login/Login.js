import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // <-- same CSS for login & signup

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  // Handle input change
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // Submit login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/login",
        { email, password },
        { withCredentials: true }
      );
      console.log("LOGIN RESPONSE:", data);

      const { status, message } = data;

      if (status) {
        console.log("LOGIN SUCCESS");
  console.log("REDIRECTING TO DASHBOARD");
        toast.success(message);

        setInputValue({
          email: "",
          password: "",
        });

        setTimeout(() => {
          window.location.href = "http://localhost:3001/*";
        }, 1000);
      } else {
        toast.error(message);
      }

    }catch (error) {
  console.log("ERROR:", error);
  console.log("DATA:", error.response?.data);

  toast.error(
    error.response?.data?.message || error.message
  );
}
  };

  return (
    <div className="auth_container">
      <div className="auth_card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="input_group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              required
            />
          </div>

          <button type="submit">Login</button>

          <p className="switch_text">
            Don’t have an account?{" "}
            <span onClick={() => navigate("/signup")}>Signup</span>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;