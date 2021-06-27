import Course from "../models/Courses.js";
import { multiMongooseToObject } from "../../util/mongoose.js";

// const { multiMongooseToObject } = require("../../util/mongoose");
class MeController {
  // Get /news

  storageCourse(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/storage-course", {
          courses: multiMongooseToObject(courses),
        })
      )
      .catch(next);
  }
}
export default MeController;
