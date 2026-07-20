import express from 'express'
import cors from 'cors'
import multer from "multer"
import dotenv from "dotenv";

// Import of direct controller
import {downloadPdf} from './src/controller/imageToPdfController.js'

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

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})