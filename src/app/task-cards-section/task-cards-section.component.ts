import { Component, OnInit } from '@angular/core';
import { TodoistService } from '../todoist.service';
import { Task } from '@doist/todoist-api-typescript';
import { ActivatedRoute } from '@angular/router';
import { NbWindowService } from '@nebular/theme';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-cards-section',
  templateUrl: './task-cards-section.component.html',
  styleUrls: ['./task-cards-section.component.scss'],
})
export class TaskCardsSectionComponent implements OnInit {
  protected tasks: Task[] = [];
  private status?: 'open' | 'closed' = undefined;

  constructor(
    private todoistService: TodoistService,
    private route: ActivatedRoute,
    private windowService: NbWindowService
  ) {}

  async onTaskUpdated() {
    this.tasks = await this.todoistService.getTasks();
  }

  openTaskForm() {
    this.windowService.open(TaskCardComponent, {
      title: `Create new Task`,
      context: { isNewTask: true },
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.status = params['status'];

      if (this.status === 'open') {
        this.todoistService.getTasks().then((task: Task[]) => {
          this.tasks = task;
        });
      } else if (this.status === 'closed') {
        this.todoistService.getCompletedTasks().then((task) => {
          this.tasks = task.items;
        });
      } else {
        this.todoistService.getTasks().then((task: Task[]) => {
          this.tasks = task;
        });
      }
    });
  }
}
