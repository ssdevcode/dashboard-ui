import axios from "axios";

console.log("=== DASHBOARDSERVICE LOADED ===");

// Azure Backend URL
const API_BASE_URL =
//  "https://ssdevcodebackend-api-ahdgdqhra5h2c7fg.eastus-01.azurewebsites.net";
    "ssdevcodebackend-e7cye7cwdnbrewct.eastus2-01.azurewebsites.net";

//  const API_BASE_URL =  "https://ssdevcodebackend-api-ahdgdqhra5h2c7fg.eastus-01.azurewebsites.net/api/customers"

console.log("API_BASE_URL =", API_BASE_URL);

/**
 * Create a new customer
 */
export const createCustomer = async (customer) => {
  const response = await axios.post(API_BASE_URL, customer);
  return response.data;
};

/**
 * Search customer by email
 */
export const getCustomerByEmail = async (email) => {
  const url = `${API_BASE_URL}/search?email=${encodeURIComponent(email)}`;

  console.log("Searching URL:", url);

  const response = await axios.get(url);

  console.log("Response Data:", response.data);

  return response.data;
};

/**
 * Get all customers
 */
export const getAllCustomers = async () => {
  const response = await axios.get(API_BASE_URL);
  return response.data;
};

/**
 * Update customer
 */
export const updateCustomer = async (id, customer) => {
  const response = await axios.put(
    `${API_BASE_URL}/${id}`,
    customer
  );

  return response.data;
};

/**
 * Delete customer
 */
export const deleteCustomer = async (id) => {
  const response = await axios.delete(
    `${API_BASE_URL}/${id}`
  );

  return response.data;
};

