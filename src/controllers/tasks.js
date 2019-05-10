import Task from "models/task";
import Constants from "constants";

export const getTasks = async (req, res, next) => {
  const { userId } = req;
  try {
    const tasks = await Task.find({ owner: userId });
    res.send({ tasks });
  } catch (err) {
    next(err);
  }
};

export const getTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: "Task is not found" });
    }
    res.json({ task });
  } catch (err) {
    next(err);
  }
};

export const createTask = async (req, res, next) => {
  const { userId } = req;
  const { title, order_number } = req.body;
  try {
    const newTask = new Task({
      title,
      order_number,
      status: Constants.STATUS.TODO,
      owner: userId
    });
    await newTask.save();
    res.send({ task: newTask });
  } catch (err) {
    next(err);
  }
};

export const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { status, order_number } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(
      id,
      { $set: { status, order_number } },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ error: "Task is not found" });
    }
    res.json({ task });
  } catch (err) {
    next(err);
  }
};

export default {
  getTasks,
  getTask,
  createTask,
  updateTask
};
