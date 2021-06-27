import express from "express";
import MeController from "../app/controllers/MeController.js";

const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const meController = new MeController();
// siteController

router.get("/course", meController.storageCourse);

export default router;
