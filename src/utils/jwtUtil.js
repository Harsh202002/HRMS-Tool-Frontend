// jwtUtil.js

// Get token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Validate token: check if it's present and not expired
  export const isTokenValid = (token) => {
    if (!token) return false;
  
    try {
      // Decode the token payload
      const payload = JSON.parse(atob(token.split('.')[1]));
  
      // Check token expiration (exp is in seconds, so multiply by 1000 to convert to ms)
      const isExpired = payload.exp * 1000 < Date.now();
      return !isExpired;
    } catch (error) {
      console.error("Error validating token:", error);
      return false;
    }
  };
  