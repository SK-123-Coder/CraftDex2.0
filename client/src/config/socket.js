// Socket config

import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

const SOCKET_URL = import.meta.env.VITE_API_URL;

let visitorId = localStorage.getItem("visitorId");

if (!visitorId) {
  visitorId = uuidv4();
  localStorage.setItem("visitorId", visitorId);
}

export const socket = io(SOCKET_URL, {
  transports: ["websocket"],
  withCredentials: true,
  auth: { visitorId },

  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
});

export default socket;