import React from "react";
import { AppBar } from "../Components/AppBar";
import { Balance } from "../Components/Balance";
import { Users } from "../Components/Users";

const Dashboard = () => {
  return (
    <div>
      <AppBar />
      <div className="m-8">
        <Balance value={"10,000"} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
