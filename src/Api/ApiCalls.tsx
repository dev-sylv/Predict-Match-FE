// const url = "https://predict-match.onrender.com";
// const url = "http://localhost:1511";

const url = "http://localhost:3556/data";
const sign = "http://localhost:3556/signin";

import axios from "axios";
import { Iuser } from "../Types/interface/interface";

export const registerUser = async (data: Iuser) => {
  return await axios
    // .post(`${url}/api/users/registeruser`, data)

    .post(`${url}`, data)
    .then((res) => {
      return res.data;
    });
};

export const UserIsVerified = async (userid: string) => {
  return await axios
    // .get(`${url}/api/users/${userid}/verifyuser`)

    .get(`${url}/api/users/${userid}/verifyuser`)
    .then((res) => res.data);
};

export const LoginUser = async (data: Iuser) => {
  return await axios
    // .post(`${url}/api/users/loginuser`, data)

    .post(`${sign}`, data)
    .then((res) => {
      return res.data;
    });
};
