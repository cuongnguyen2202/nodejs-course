import mongoose from "mongoose";
import slug from "mongoose-slug-generator";
mongoose.plugin(slug);
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseScheme = new Schema(
  {
    name: { type: String, maxLength: 255, required: true },
    description: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name", unique: true },
    img: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, required: true },
  },
  { timestamps: true }
);
const Course = mongoose.model("Course", CourseScheme);
export default Course;
