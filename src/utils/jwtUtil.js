// Utility to get the token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Utility to check if the token is valid
  export const isTokenValid = (token) => {
    if (!token) return false;
  
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now(); // Check if token is expired
    } catch (error) {
      console.error('Invalid token:', error);
      return false;
    }
  };
  