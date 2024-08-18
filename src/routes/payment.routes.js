import Router from "express";
import { metodPayment } from "../controllers/payment.controllers.js";
const router = Router()


router.post('/pay-order', metodPayment)


export default router