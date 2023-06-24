const url = "https://predict-match.onrender.com";
import axios from "axios";
import { Iuser } from "../Types/interface/interface";

export const registerUser = async (data: Iuser) => {
  try {
    const post = await axios.post(`${url}/api/users/registeruser`, data);
    return post;
  } catch (error) {
    console.log("error", error);
  }
};
