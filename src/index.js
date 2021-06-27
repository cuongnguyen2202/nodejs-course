import path from "path";
import express from "express";
import morgan from "morgan";
import handlebars from "express-handlebars";
import methodOverride from "method-override";
import route from "./routes/index.js";
import connect from "./config/db/index.js";
const app = express();
const port = 3000;
const __dirname = path.resolve();

// connect to db
connect();
app.use(express.static(path.join(__dirname, "src", "public")));
app.use(morgan("combined"));
// Template engine handlebars
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
// override with POST
app.use(methodOverride("_method"));

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src", "resources", "views"));
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
