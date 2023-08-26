import { Injectable } from '@angular/core';
import { TodoistApi } from '@doist/todoist-api-typescript';

@Injectable({
  providedIn: 'root',
})
export class TodoistService {
  private api: TodoistApi;

  constructor() {
    this.api = new TodoistApi('0123456789abcdef0123456789');
  }

  addTask(task: any) {
    return this.api
      .addTask(task)
      .then((response) => response)
      .catch((error) => error);
  }
}
