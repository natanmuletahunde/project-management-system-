import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getErrorMessage } from "../lib/get-error-message";

const prisma = new PrismaClient();

export const getTasks = async (req: Request, res: Response): Promise<void> => {
    const { projectId } = req.query;

    const pid =
      projectId && projectId !== "undefined" && projectId !== "null"
        ? Number(projectId)
        : undefined;

    try {
      const tasks = await prisma.task.findMany({
        where: pid ? { projectId: pid } : {},  // use {} if not valid id
        include: {
          author: true,
          assignee: true,
          comments: true,
          attachments: true,
        },
      });
      res.json(tasks);
    } catch (error: any) {
      res
        .status(500)
        .json({ message: `Error retrieving tasks: ${getErrorMessage(error)}` });
    }
  };


export const createTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {
    title,
    description,
    status,
    priority,
    tags,
    startDate,
    dueDate,
    points,
    projectId,
    authorUserId,
    assignedUserId,
  } = req.body;
  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId,
      },
    });
    res.status(201).json(newTask);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error creating a Task : ${getErrorMessage(error)}` });
  }
};

export const updateTaskStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { taskId } = req.params;
  const { status } = req.body;
  try {
    const updatedTask = await prisma.task.update({
      where: {
        id: Number(taskId),
      },
      data: {
        status: status,
      },
    });
    res.json(updatedTask);
  } catch (error: any) {
    res.status(500).json({ message: `Error updating task: ${getErrorMessage(error)}` });
  }
};
export const getUserTasks = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.params;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        OR: [
          { authorUserId: Number(userId) },
          { assignedUserId: Number(userId) },
        ],
      },
      include: {
        author: true,
        assignee: true,
      },
    });
    res.json(tasks);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: `Error retrieving user's tasks: ${getErrorMessage(error)}` });
  }
};
