import { Component, OnInit } from '@angular/core';
import { TodoistService } from '../todoist.service';
import { Task } from '@doist/todoist-api-typescript';

@Component({
  selector: 'app-task-cards-section',
  templateUrl: './task-cards-section.component.html',
  styleUrls: ['./task-cards-section.component.scss'],
})
export class TaskCardsSectionComponent implements OnInit {
  public tasks: Task[] = [];

  constructor(private todoistService: TodoistService) {}

  async onTaskDeleted() {
    this.tasks = await this.todoistService.getTasks();
  }  

  ngOnInit() {
    this.todoistService.getTasks()
    .then((task: Task[]) => {
      this.tasks = task;
    });
  }
}