// Key used to store the token in localStorage
const TOKEN_KEY = 'authToken';

// Store the token in localStorage
export const storeToken = (token) => {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('Failed to store token:', error);
  }
};

// Retrieve the token from localStorage
export const getToken = () => {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('Failed to retrieve token:', error);
    return null;
  }
};

// Remove the token from localStorage (used for logout)
export const removeToken = () => {
  try {
    localStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error('Failed to remove token:', error);
  }
};

// Check if a token is stored in localStorage
export const hasToken = () => {
  return !!getToken(); // Returns true if token exists, false otherwise
};
