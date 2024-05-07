import axios from "axios";
import { useSelector } from "react-redux";

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";


const useApiRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {axiosToken, axiosPublic} = useAxios();
  const { token } = useSelector((state) => state.auth);
  const login = async (userData) => {
    //   const BASE_URL = "https://10129.fullstack.clarusway.com/";

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("login successful");
      navigate("/stock");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify("login unsuccessful");
    }
  };
  const register = async (userData) => {
    dispatch(fetchStart());

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users`,
        userData
      );

      dispatch(registerSuccess(data));
      toastSuccessNotify("register successful");
      navigate("/");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("register unsuccessful");
      console.log(error);
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      // await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`, {
      //   headers: {
      //     Authorization: `Token ${token}`,
      //   },
      // });


      // dispatch(logoutSuccess());
      // toastSuccessNotify("Logout işlemi başarılı");
      // navigate("/");

      await axiosToken.get('/auth/logout')



    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout işlemi başarısız oldu");
      console.log(error);
    }
  };
  return { login, register, logout, fetchStart, fetchFail };
};

export default useApiRequest;
