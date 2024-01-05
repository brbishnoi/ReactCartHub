// AuthService.js
import axios from "axios";

const API_URL = "https://dummyjson.com/auth/login";

const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(API_URL, { username, password });

      if (!response.data.token) {
        throw new Error("Invalid credentials");
      }

      const token = response.data.token;

      // Save the token in localStorage
      localStorage.setItem("token", token);

      return token;
    } catch (error) {
      throw new Error(`Login failed: ${error.message}`);
    }
  },

  logout: () => {
    // Clear the token from localStorage on logout
    localStorage.removeItem("token");
  },

  getToken: () => {
    // Retrieve the token from localStorage
    return localStorage.getItem("token");
  },
};

export default AuthService;
