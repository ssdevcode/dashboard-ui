import React, { useState } from "react";
import { getCustomerByEmail } from "../api/dashboardService";

const SearchCustomer = () => {
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState(null);
  const [status, setStatus] = useState("");

  const handleSearch = async () => {
    setStatus("Searching...");

    try {

      console.log("Searching for:", email);

      const result = await getCustomerByEmail(email);

      console.log("Customer found:", customer);

      setCustomer(result);
      setStatus("");
    } catch (err) {
      console.error(err);
      setCustomer(null);
      setStatus("❌ Customer not found");
    }
  };

  return (
    <div style={cardStyle}>
      <h2>Search Customer</h2>

      <input
        type="email"
        placeholder="Enter customer email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <button
        type="button"
        onClick={handleSearch}
        style={buttonStyle}
      >
        Search Customer
      </button>

      {status && <p>{status}</p>}

      {customer && (
        <div style={resultStyle}>
          <p>
            <strong>Name:</strong> {customer.firstName}{" "}
            {customer.lastName}
          </p>

          <p>
            <strong>Email:</strong> {customer.email}
          </p>

          <p>
            <strong>Phone:</strong> {customer.phone}
          </p>

          <p>
            <strong>Address:</strong> {customer.address}
          </p>

          <p>
            <strong>City:</strong> {customer.city}
          </p>

          <p>
            <strong>State:</strong> {customer.state}
          </p>

          <p>
            <strong>Zip:</strong> {customer.zipcode}
          </p>
        </div>
      )}
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  width: "400px",      // smaller card
  maxWidth: "100%",
  margin: "0 auto"     // center card
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#0078d4",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer"
};

const resultStyle = {
  marginTop: "15px",
  padding: "10px",
  backgroundColor: "#f8f9fa",
  borderRadius: "5px"
};

export default SearchCustomer;