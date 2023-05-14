import axios from "axios";
import { Home } from "../constants/interfaces";
const baseURL = () => {
  const apiUrl = "http://sigirisoft.lk/fresh_backend/index.php/API/";
  return apiUrl;
};
const handleHomeResponse = (response: any) => {
  return {
    items: (response.data as Home).respond,
    status: (response.data as Home).status,
    error: response && response.data ? response.data.error : "",
  };
};
const handleError = (errorObject: any) => {
  return {
    items: null,
    status: errorObject.response.status,
    message: errorObject.response.data.message,
  };
};
const Service = {
  //Post contact
  home:async (data: any) => {
    let url = `${baseURL()}home`;
    return axios
      .post(url,data)
      .then(handleHomeResponse)
      .catch(handleError);
  }
};
export default Service;