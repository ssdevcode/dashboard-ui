import axios from "axios";

//const API_BASE_URL = "http://localhost:8080/api/customers";
//const API_BASE_URL = "http://localhost:3001/api/customers";
const API_BASE_URL = "https://demoappbackend-ckdbd4grb2bxdpac.eastus2-01.azurewebsites.net/api/customers"

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
/*
export const getCustomerByEmail = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/search?email=${encodeURIComponent(email)}`
  );
  return response.data;
};
*/

export const getCustomerByEmail = async (email) => {
  const response = await axios.get(
    `${API_BASE_URL}/search?email=${encodeURIComponent(email)}`
  );

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
