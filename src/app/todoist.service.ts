import { Injectable } from '@angular/core';
import { TodoistApi } from '@doist/todoist-api-typescript';

@Injectable({
  providedIn: 'root',
})
export class TodoistService {
  private api: TodoistApi;

  constructor() {
    this.api = new TodoistApi('6a5a5d31a5a54e59e69884515eb89bc34603e0a8');
  }

  getTasks(): any {
    return this.api
      .getTasks();
  }

  addTask(task: any) {
    return this.api
      .addTask(task)
      .then((response) => response)
      .catch((error) => error);
  }
}
