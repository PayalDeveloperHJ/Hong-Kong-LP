// src/utils/getBasePath.js
const getBasePath = () => {
    return process.env.NODE_ENV === 'production'
      ? process.env.REACT_APP_PROD_URL
      : process.env.REACT_APP_BASE_URL;
  };
  
  export default getBasePath;
  