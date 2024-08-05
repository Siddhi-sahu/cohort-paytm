import React, { useEffect, useState } from "react";
import { AppBar } from "../Components/AppBar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";
import axios from "axios";

const Dashboard = () => {
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/account/balance",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setBalance(response.data.balance);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <AppBar />
      <div className="m-8">
        {error && <div className="text-red-500">Error: {error}</div>}
        {balance !== null ? (
          <Balance value={parseFloat(balance.toFixed(2))} />
        ) : (
          <div>Loading...</div>
        )}
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
