import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signup.css"; // same CSS as login

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      const { data } = await axios.post(
        "http://localhost:3002/auth/signup",
        { username, email, password },
        { withCredentials: true }
      );

      const { status, message } = data;

      if (status) {
        toast.success(message);

        setInputValue({
          username: "",
          email: "",
          password: "",
        });

        // BEST UX → directly go to dashboard
        setTimeout(() => {
          window.location.href = "http://localhost:3001/*";
        }, 1000);

      } else {
        toast.error(message);
      }

    }catch (error) {
      console.log("FULL ERROR:", error);
    
      if (error.response) {
        console.log("Backend error:", error.response.data);
      } else if (error.request) {
        console.log("No response received:", error.request);
      } else {
        console.log("Error:", error.message);
      }
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_card">
        <h2>Create Account</h2>

        <form onSubmit={handleSubmit}>
          <div className="input_group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter username"
              onChange={handleOnChange}
              required
            />
          </div>

          <div className="input_group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
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
              placeholder="Enter password"
              onChange={handleOnChange}
              required
            />
          </div>

          <button type="submit">Signup</button>

          <p className="switch_text">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;