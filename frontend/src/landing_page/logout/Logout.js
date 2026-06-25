import { useEffect } from "react";
import axios from "axios";

const Logout = () => {
  useEffect(() => {
    const logoutUser = async () => {
      try {
        await axios.get(
          "http://localhost:3002/logout",
          { withCredentials: true }
        );

        window.location.href = "http://localhost:3001/login";
      } catch (error) {
        console.log(error);
      }
    };

    logoutUser();
  }, []);

  return (
    <div className="logout-container">
      <div className="logout-card">
        <h2>👋 Logging Out</h2>
        <p>Please wait while we securely sign you out...</p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Logout;