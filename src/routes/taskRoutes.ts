import { Router } from "express";
import * as fileDataSource from "../datasources/fileDataSource";
import * as taskDao from "../dao/taskDao";

const taskRoutes = Router();

taskRoutes.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await taskDao.findAll();

    res.set("Content-type", "application/json");
    res.send(tasks || []);
  } catch (err) {
    console.error(err);
    res.send([]);
  }
});

taskRoutes.post("/api/tasks", async (req, res) => {
  try {
    const task = await taskDao.save(req.body);
    res.send(task);
  } catch (err) {
    console.error(err);
    res.send("Error.");
  }
});

export default taskRoutes;
