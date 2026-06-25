import React, { useEffect, useState } from "react";
import axios from "axios";

import TopBar from "./components/TopBar";
import Dashboard from "./components/Dashboard";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/auth/verify",
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setLoading(false);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        window.location.href = "http://localhost:3000/login";
      }
    };

    verifyUser();
  }, []);

  if (loading) {
    return <h2>Checking authentication...</h2>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;