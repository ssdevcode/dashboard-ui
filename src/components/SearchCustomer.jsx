import React, { useState } from "react";
//import { getCustomerByEmail } from "../api/dashboardService";
import  getCustomerByEmail  from "../api/dashboardService";
const SearchCustomer = () => {
  const [email, setEmail] = useState("");
  const [customer, setCustomer] = useState(null);
  const [status, setStatus] = useState("");

  const handleSearch = async () => {
    setStatus("Searching...");

    try {
      console.log("Searching for:", email);

      const result = await getCustomerByEmail(email);

      console.log("Customer found:", result);

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
          <h3>Customer Details</h3>

          <p>
            <strong>Customer ID:</strong> {customer.CustomerId}
          </p>

          <p>
            <strong>First Name:</strong> {customer.FirstName}
          </p>

          <p>
            <strong>Last Name:</strong> {customer.LastName}
          </p>

          <p>
            <strong>Email:</strong> {customer.Email}
          </p>

          <p>
            <strong>Phone:</strong> {customer.PhoneNumber}
          </p>

          <p>
            <strong>Address:</strong> {customer.AddressLine1}
          </p>

          <p>
            <strong>Address 2:</strong> {customer.AddressLine2}
          </p>

          <p>
            <strong>City:</strong> {customer.City}
          </p>

          <p>
            <strong>State:</strong> {customer.StateProvince}
          </p>

          <p>
            <strong>Zip Code:</strong> {customer.PostalCode}
          </p>

          <p>
            <strong>Country:</strong> {customer.Country}
          </p>

          <p>
            <strong>Active:</strong>{" "}
            {customer.IsActive ? "Yes" : "No"}
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
  width: "400px",
  maxWidth: "100%",
  margin: "0 auto"
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