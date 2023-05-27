import axios from "axios";
import { Create, Favorites, Home, Stats, Users, Validate } from "../constants/interfaces";
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
const handleUserResponse = (response: any) => {
  return {
    users: (response.data as Users).respond,
    status: (response.data as Users).status,
    error: response && response.data ? response.data.error : "",
  };
};
const handleFavoriteResponse = (response: any) => {
  return {
    users: (response.data as Create).message,
    status: (response.data as Create).status,
    error: response && response.data ? response.data.error : "",
  };
};
const handleValidateResponse = (response: any) => {
  return {
    respond: (response.data as Validate).respond,
    status: (response.data as Validate).status,
    error: response && response.data ? response.data.error : "",
  };
};
const handleFavoritesResponse = (response: any) => {
  return {
    respond: (response.data as Favorites).respond,
    status: (response.data as Favorites).status,
    error: response && response.data ? response.data.error : "",
  };
};
const handleStatsResponse = (response: any) => {
  return {
    respond: (response.data as Stats).respond,
    status: (response.data as Stats).status,
    error: response && response.data ? response.data.error : "",
  };
};
const handleError = (errorObject: any) => {
  return {
    items: null,
    users: null,
    respond: null,
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
  },
  get:async (data: any) => {
    let url = `${baseURL()}get`;
    return axios
      .post(url,data)
      .then(handleHomeResponse)
      .catch(handleError);
  },
  search:async (data: any) => {
    let url = `${baseURL()}search`;
    return axios
      .post(url,data)
      .then(handleHomeResponse)
      .catch(handleError);
  },
  user:async (data: any) => {
    let url = `${baseURL()}user`;
    return axios
      .post(url,data)
      .then(handleUserResponse)
      .catch(handleError);
  },
  favorite:async (data: any) => {
    let url = `${baseURL()}favorite`;
    return axios
      .post(url,data)
      .then(handleFavoriteResponse)
      .catch(handleError);
  },
  otp:async (data: any) => {
    let url = `${baseURL()}otp`;
    return axios
      .post(url,data)
      .then(handleFavoriteResponse)
      .catch(handleError);
  },
  validate:async (data: any) => {
    let url = `${baseURL()}validate`;
    return axios
      .post(url,data)
      .then(handleValidateResponse)
      .catch(handleError);
  },
  approve:async (data: any) => {
    let url = `${baseURL()}approve`;
    return axios
      .post(url,data)
      .then(handleFavoriteResponse)
      .catch(handleError);
  },
  upload:async (data: any) => {
    let url = `${baseURL()}upload`;
    return axios
      .post(url,
        data, 
        {headers:{
        "Content-Type": "multipart/form-data",
        }})
      .then(handleFavoriteResponse)
      .catch(handleError);
  },
  create:async (data: any) => {
    let url = `${baseURL()}create`;
    return axios
      .post(url,data)
      .then(handleFavoriteResponse)
      .catch(handleError);
  },
  getfavorite:async (data: any) => {
    let url = `${baseURL()}getfavorite`;
    return axios
      .post(url,data)
      .then(handleFavoritesResponse)
      .catch(handleError);
  },
  register:async (data: any) => {
    let url = `${baseURL()}register`;
    return axios
      .post(url,data)
      .then(handleFavoriteResponse)
      .catch(handleError);
  },
  profile:async (data: any) => {
    let url = `${baseURL()}profile`;
    return axios
      .post(url,data)
      .then(handleStatsResponse)
      .catch(handleError);
  },
  notification:async (data: any) => {
    let url = `${baseURL()}notification`;
    return axios
      .post(url,data)
      .then(handleStatsResponse)
      .catch(handleError);
  },
  getuserfav:async (data: any) => {
    let url = `${baseURL()}getuserfav`;
    return axios
      .post(url,data)
      .then(handleHomeResponse)
      .catch(handleError);
  },
  
};
export default Service;