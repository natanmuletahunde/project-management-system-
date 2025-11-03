import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getProjects } from '../../../server/src/contollers/projectController';
import { updateTaskStatus } from '../../../server/src/contollers/taskController';
export interface Project {
    id: number; //  this are mandatory
    name: string;
    description?: string; // this three things are optional
    startDate?: string;
    endDate?: string;
}
export enum Priority {
    Urgent = "Urgent",
    High = "High",
    Medium = "Medium",
    Low = "Low",
    Backlog = "Backlog",
}

export enum Status {
    ToDo = "To Do",
    WorkInProgress = "Work In Progress",
    UnderReview = "Under Review",
    Completed = "Completed",
}
export interface Task {
    id: number;
    title: string;
    description?: string;
    status?: Status;
    priority?: Priority;
    tags?: string;
    startDate?: string;
    dueDate?: string;
    points?: number;
    projectId: number;
    authorUserId?: number;
    assignedUserId?: number;
}

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.PUBLIC_API_BASE_URL }),
    reducerPath: "api",
    tagTypes: ["Projects", "Tasks"],
    endpoints: (build) => ({
        getProjects: build.query<Project[], void>({
            query: () => 'projects',
            providesTags: [{ type: "Projects" }]
        }),

        createProject: build.mutation<Project, Partial<Project>>({
            query: (project) => ({
                url: "projects",
                method: "POST",
                body: project,
            }),
            invalidatesTags: ["Projects"],
        }),
        getTasks: build.query<Task[], { projectId: number }>({
            query: ({ projectId }) => `tasks?projectId=${projectId}`,
            providesTags: (result) =>
                result
                    ? result.map(({ id }) => ({ type: "Tasks" as const, id }))
                    : [{ type: "Tasks" as const }],
        }),
        createTask: build.mutation<Task, Partial<Task>>({
            query: (task) => ({
                url: "task",
                method: "POST",
                body: task,
            }),
            invalidatesTags: ["Tasks"],
        }),

        updateTaskStatus: build.mutation<Task, { taskId: number; status: string }>({
            query: ({ taskId, status }) => ({
                url: `tasks/${taskId}/status`,
                method: "PATCH",
                body: { status },
            }),
            invalidatesTags: (result, error, { taskId }) => [
                { type: "Tasks", id: taskId }],
        })
    })
})
export const { useGetProjectsQuery, useCreateProjectMutation, useGetTasksQuery, useCreateTaskMutation } = api;
