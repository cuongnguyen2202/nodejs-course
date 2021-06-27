import Course from "../models/Courses.js";
import { mongooseToObject } from "../../util/mongoose.js";

// const { multiMongooseToObject } = require("../../util/mongoose");
class CourseController {
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        return res.render("courses/show", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
  // POST
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = { ...req.body };
    formData.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch(next);
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        return res.render("courses/edit", {
          course: mongooseToObject(course),
        });
      })
      .catch(next);
  }
  //PUT METHOD course/:id/
  update(req, res, next) {
    // Course.updateOne({ _id: req.params.id }, req.body)
    //   .then(res.json(req.body))
    //   .catch(next);
    res.json(req.body);
  }
}
export default CourseController;
