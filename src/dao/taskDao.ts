import * as fileDataSource from "../datasources/fileDataSource";
import Task from "../models/Task";
import crypto from "crypto";

const fileName = "db/tasks.json";

export const findAll = async (): Promise<Task[]> => {
  try {
    const tasks = await fileDataSource.read(fileName);

    return tasks ? tasks : [];
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const generateId = () => crypto.randomUUID();

export const save = async (taskToSave: Task): Promise<Task> => {
  const tasks = await findAll();

  const task: Task = {
    ...taskToSave,
    id: generateId(),
  };

  tasks.push(task);

  await fileDataSource.write<Task[]>(fileName, tasks);

  return task;
};
