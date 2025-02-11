import { Router } from "express";
import { getAppointmentByUser, getAppointments, saveAppointment } from "./appointment.controller.js";
import { createAppointmentValidator, getAppointmentValidator } from "../middlewares/appointment-validators.js";
import { getUserByIdValidator } from "../middlewares/user-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/findAppointment/:uid", getUserByIdValidator, getAppointmentValidator, getAppointmentByUser);

router.get("/", getAppointments);

export default router;