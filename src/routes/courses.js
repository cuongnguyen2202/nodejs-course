import express from "express";
import CourseController from "../app/controllers/CourseController.js";

const router = express.Router();

// const siteController = require("../app/controllers/SiteController");
const courseController = new CourseController();
// siteController
router.post("/store", courseController.store);
router.get("/create", courseController.create);
router.get("/:id/edit", courseController.edit);
router.put("/:id", courseController.update);
router.get("/:slug", courseController.show);

export default router;
