// Handle image to pdf converter controller route
import express from 'express'
import {downloadPdf} from '../controller/imageToPdfController.js'

const downloadPdfRoute = express.Router();

downloadPdfRoute.post('/downloadPdf', downloadPdf);

export default downloadPdfRoute;