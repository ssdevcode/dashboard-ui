import React from "react";
import SearchCustomer from "../components/SearchCustomer";
import AddCustomer from "../components/AddCustomer";

const Dashboard = () => {
  return (
    /*
    <div style={{ padding: "20px" }}>
      <h1>Customer Dashboard</h1>
    */
    
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1>Customer Dashboard</h1>
   
      <div style={dashboardContainer}>
        <SearchCustomer />
        <AddCustomer />
      </div>
    </div>
  );
};

const dashboardContainer = {
  display: "flex",
  gap: "20px",
  alignItems: "flex-start",
  flexWrap: "wrap"
};

export default Dashboard;