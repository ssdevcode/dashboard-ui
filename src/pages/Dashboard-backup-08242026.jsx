import React, { useEffect, useState } from "react";
import {
  getDashboardStats,
  getDashboardOrders,
  createCustomer
} from "../api/dashboardService";

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Customer state (UPDATED)
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: ""
  });

  const [customerStatus, setCustomerStatus] = useState("");

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const statsData = await getDashboardStats();
        const ordersData = await getDashboardOrders();

        setStats(statsData);
        setOrders(ordersData);
      } catch (err) {
        console.error(err);
        setError("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // ✅ Generic change handler (no changes needed)
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ✅ Submit customer to Azure
  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    setCustomerStatus("Saving...");

    try {
      await createCustomer(customer);
      setCustomerStatus("✅ Customer saved successfully");

      // ✅ Reset form
      setCustomer({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipcode: ""
      });
    } catch (err) {
      console.error(err);
      setCustomerStatus("❌ Failed to save customer");
    }
  };

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      {/* ✅ STATS + CUSTOMER CARD */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <div style={cardStyle}>
          <h3>Total Users</h3>
          <p>{stats.TotalUsers}</p>
        </div>

        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <p>${stats.TotalRevenue.toLocaleString()}</p>
        </div>

        {/* ✅ CUSTOMER CARD */}
        <div style={{ ...cardStyle, width: "350px" }}>
          <h3>Add Customer</h3>

          <form onSubmit={handleCustomerSubmit}>
            <input
              name="firstName"
              placeholder="First Name"
              value={customer.firstName}
              onChange={handleCustomerChange}
              style={inputStyle}
              required
            />

            <input
              name="lastName"
              placeholder="Last Name"
              value={customer.lastName}
              onChange={handleCustomerChange}
              style={inputStyle}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleCustomerChange}
              style={inputStyle}
              required
            />

            <input
              name="phone"
              placeholder="Phone"
              value={customer.phone}
              onChange={handleCustomerChange}
              style={inputStyle}
            />

            {/* ✅ ADDRESS FIELDS */}
            <input
              name="address"
              placeholder="Street Address"
              value={customer.address}
              onChange={handleCustomerChange}
              style={inputStyle}
              required
            />

            <input
              name="city"
              placeholder="City"
              value={customer.city}
              onChange={handleCustomerChange}
              style={inputStyle}
              required
            />

            <input
              name="state"
              placeholder="State"
              value={customer.state}
              onChange={handleCustomerChange}
              style={inputStyle}
              required
            />

            <input
              name="zipcode"
              placeholder="Zip Code"
              value={customer.zipcode}
              onChange={handleCustomerChange}
              style={inputStyle}
              pattern="\d{5}"
              title="5-digit zip code"
              required
            />

            <button type="submit" style={buttonStyle}>
              Save Customer
            </button>

            {customerStatus && (
              <p style={{ marginTop: "10px" }}>{customerStatus}</p>
            )}
          </form>
        </div>
      </div>

      {/* ✅ ORDERS TABLE */}
      <h2>Orders</h2>

      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr>
            {orders.length > 0 &&
              Object.keys(orders[0]).map((col) => (
                <th key={col}>{col}</th>
              ))}
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              {Object.values(order).map((val, i) => (
                <td key={i}>
                  {val instanceof Date ? val.toString() : val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ✅ Styles
const cardStyle = {
  background: "#f4f6f8",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc"
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

export default Dashboard;