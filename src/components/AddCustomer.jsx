import React, { useState } from "react";
import { createCustomer } from "../api/dashboardService";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const [customerStatus, setCustomerStatus] = useState("");

  /*
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    console.log("Field:", name);
    console.log("Value:", value);

    setCustomer((prev) => ({
      ...prev,
      value,
    }));
  };
  */

  const handleCustomerChange = (e) => {
  const { name, value } = e.target;

  console.log("Field:", name);
  console.log("Value:", value);

  setCustomer((prev) => {
    const updatedCustomer = {
      ...prev,
      [name]: value
    }
    console.log("Updated Customer:", updatedCustomer);

    return updatedCustomer;
  });
};

  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    setCustomerStatus("Saving...");

    try {
      console.log("Saving customer:", customer);

      await createCustomer(customer);

      setCustomerStatus("✅ Customer saved successfully");

      setCustomer({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
      });
    } catch (err) {
      console.error("Save failed:", err);
      setCustomerStatus("❌ Failed to save customer");
    }
  };

  return (
    <div style={cardStyle}>
      <h2>Add Customer</h2>

      <form onSubmit={handleCustomerSubmit}>
        <div style={rowStyle}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={customer.firstName}
            onChange={handleCustomerChange}
            style={halfInputStyle}
            required
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={customer.lastName}
            onChange={handleCustomerChange}
            style={halfInputStyle}
            required
          />
        </div>

        <div style={rowStyle}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={customer.email}
            onChange={handleCustomerChange}
            style={halfInputStyle}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={customer.phone}
            onChange={handleCustomerChange}
            style={halfInputStyle}
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={customer.address}
          onChange={handleCustomerChange}
          style={fullInputStyle}
        />

        <div style={rowStyle}>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={customer.city}
            onChange={handleCustomerChange}
            style={thirdInputStyle}
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={customer.state}
            onChange={handleCustomerChange}
            style={thirdInputStyle}
          />

          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={customer.zipcode}
            onChange={handleCustomerChange}
            style={thirdInputStyle}
          />
        </div>

        <button type="submit" style={buttonStyle}>
          Save Customer
        </button>

        {customerStatus && (
          <p style={{ marginTop: "10px" }}>
            {customerStatus}
          </p>
        )}
      </form>
    </div>
  );
};

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #d1d5db",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  width: "600px",
  maxWidth: "100%",
  margin: "0 auto",
};

const rowStyle = {
  display: "flex",
  gap: "10px",
  marginBottom: "10px",
};

const halfInputStyle = {
  flex: 1,
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const thirdInputStyle = {
  flex: 1,
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const fullInputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#0078d4",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default AddCustomer;


