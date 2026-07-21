import dotenv from "dotenv";

import express from 'express'
import cors from 'cors'
import multer from "multer"
import http from 'http'
import {Server} from 'socket.io'


// Import of direct controller
import {downloadPdf} from './src/controller/imageToPdfController.js'
import dashboardRoutes from './src/routes/dashboard.js'

// Routes
import adminRoutes from "./src/routes/adminRoutes.js"

dotenv.config();


const app = express()
const PORT = 3000

app.use(express.json());              // <-- Required
app.use(express.urlencoded({ extended: true })); // Optional but recommended

app.use(cors({
  origin: [
    "http://localhost:5173"  //"https://craftdex.in" // 
  ],
  credentials: true,
}));

app.use("/api/dashboard", dashboardRoutes);

// =======================================================================================================
// Live user count and daily active user count

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:5173"  // "https://craftdex.in"  // 
    ],
    credentials: true,
  },
  transports: ["websocket"],
});

// Online users
let onlineUsers = 0;

// Daily active users
let dailyUsers = new Set();
let currentDate = new Date().toDateString();

io.on("connection", (socket) => {
  // console.log("✅ New socket connection");
  // console.log("Socket ID:", socket.id);
  // console.log("Auth:", socket.handshake.auth);
  // console.log("Origin:", socket.handshake.headers.origin);

  const today = new Date().toDateString();

  if (today !== currentDate) {
    currentDate = today;
    dailyUsers.clear();
  }

  const visitorId = socket.handshake.auth.visitorId;

  onlineUsers++;
  // console.log("Online Users:", onlineUsers);
  io.emit("userCount", onlineUsers);

  if (visitorId) {
    dailyUsers.add(visitorId);
    // console.log("Daily Users:", dailyUsers.size);
    io.emit("dailyActiveUsers", dailyUsers.size);
  }

  socket.on("disconnect", (reason) => {
    // console.log("❌ Socket disconnected:", reason);
    onlineUsers--;
    io.emit("userCount", onlineUsers);
  });
});

// =======================================================================================================

// ===================================================================================================================

app.get('/', (req, res) => {
    res.send('Hello')
})

// ===================================================================================================================

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

app.post(
  "/api/downloadPdf",
  upload.array("images"),
  downloadPdf
);

// ===================================================================================================================

app.use("/api/adminlogin", adminRoutes);

// ===================================================================================================================



// ===================================================================================================================

server.listen(PORT, ()=> {
    console.log(`Server is running on http://localhost:${PORT}`)
})