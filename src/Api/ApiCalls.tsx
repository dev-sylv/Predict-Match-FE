const url = "https://predict-match.onrender.com";
const local = "http://localhost:1511";
import axios from "axios";
import { Iuser } from "../Types/interface/interface";

export const registerUser = async (data: Iuser) => {
  return await axios
    .post(`${url}/api/users/registeruser`, data)
    .then((res) => res.data);
};

export const UserIsVerified = async (userid: string) => {
  return await axios
    .get(`${url}/api/users/${userid}/verifyuser`)
    .then((res) => res.data);
};

export const LoginUser = async (data: any) => {
  return await axios
    .post(`${url}/api/users/loginuser`, data)
    .then((res) => res.data);
};
