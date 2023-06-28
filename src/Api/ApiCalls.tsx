const url = "https://predict-match.onrender.com";
const local = "http://localhost:1511";
import axios from "axios";
import { Iuser } from "../Types/interface/interface";

export const registerUser = async (data: Iuser) => {
  try {
    const post = await axios.post(`${url}/api/users/registeruser`, data);
    return post;
  } catch (error) {
    return error;
  }
};

export const UserIsVerified = async (userid: string) => {
  try {
    return await axios.get(`${url}/api/users/${userid}/verifyuser`);
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (data: any) => {
  try {
    const user = await axios.post(`${url}/api/users/loginuser`, data);
    return user;
  } catch (error) {
    return error;
  }
};
