import axios from "axios";

const API_BASE = "http://localhost:3001/api";

// ✅ Axios instance
const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json"
  }
});

// ✅ Stats
export const getDashboardStats = async () => {
  const res = await api.get("/dashboard/stats");
  
  
  return res.data;
};

// ✅ Orders
export const getDashboardOrders = async () => {
  const res = await api.get("/dashboard/orders");
  return res.data;
};

// ✅ Create Customer
export const createCustomer = async (customer) => {
  const res = await api.post("/customers", customer);
  return res.data;
};



