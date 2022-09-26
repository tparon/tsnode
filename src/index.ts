import express from "express";
import bodyParser from "body-parser";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";

const app = express();

app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());
app.use(taskRoutes);

app.listen(3000, () => {
  console.log("App is running on port 3000");
});
