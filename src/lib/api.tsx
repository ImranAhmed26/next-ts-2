import axios from 'axios';

const baseUrl = 'https://main-service-psrq44h5bq-nw.a.run.app/api/';

// For Token Verification
// const getHeaders = () => ({});



// GET request
export const GET = async (route = '', query = {}) => {
  try {
   
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.get(apiRoute);
    return { data, status };
  } catch (error) {
    return error;
  }
};

//Post Request
export const POST = async (route = '', body = {}) => {
  try {
    const apiRoute = `${baseUrl}${route}`;
    const { data, status } = await axios.post(apiRoute);
    return { data, status };
  } catch (error) {
    return error
  }
};
