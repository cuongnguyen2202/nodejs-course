import siteRouter from "./site.js";
import courseRouter from "./courses.js";
import meRouter from "./me.js";
const route = (app) => {
  // app.use("/news", newsRouter);
  app.use("/course", courseRouter);
  app.use("/me", meRouter);
  app.use("/", siteRouter);
};

export default route;
