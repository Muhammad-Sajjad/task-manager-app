import { Injectable } from '@angular/core';
import { AddTaskArgs, Task, TodoistApi } from '@doist/todoist-api-typescript';

@Injectable({
  providedIn: 'root',
})
export class TodoistService {
  private api: TodoistApi;

  constructor() {
    this.api = new TodoistApi('6a5a5d31a5a54e59e69884515eb89bc34603e0a8');
  }

  getTasks(): Promise<Task[]> {
    return this.api.getTasks();
  }

  addTask(task: AddTaskArgs): Promise<Task> {
    return this.api.addTask(task);
  }

  editTask(id: string, task: TaskInternal): Promise<Task> {
    return this.api.updateTask(id, task);
  }

  deleteTask(taskId: string): Promise<boolean> {
    return this.api.deleteTask(taskId);
  }

  closeTask(taskId: string): Promise<boolean> {
    return this.api.closeTask(taskId);
  }
}

export interface TaskInternal {
  content?: string;
  description?: string;
}
