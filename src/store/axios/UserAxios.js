import axios from "axios";
import store from "../Store";
// Set config defaults when creating the instance
const UserAxios = axios.create({
  baseURL: store.getState().info.baseUrl,
  headers: { Authorization: localStorage.getItem("userToken") }
});

export default UserAxios;
