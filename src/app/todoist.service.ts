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
    return this.api
      .getTasks();
  }

  addTask(task: AddTaskArgs): Promise<Task> {
    return this.api
      .addTask(task);
  }

  deleteTask(taskId: string) {
    return this.api.deleteTask(taskId);
  }
}
