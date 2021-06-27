import Course from "../models/Courses.js";
import { multiMongooseToObject } from "../../util/mongoose.js";

// const { multiMongooseToObject } = require("../../util/mongoose");
class SiteController {
  // Get /news
  index(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("home", {
          courses: multiMongooseToObject(courses),
        })
      )
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
export default SiteController;
