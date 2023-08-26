import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoistService } from '../todoist.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})

export class TaskCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Output() taskDeleted = new EventEmitter<void>();
  
  constructor(private todoistService: TodoistService) {}

  deleteTask(id: string) {
    this.todoistService.deleteTask(id)
    .then(() => {
      this.taskDeleted.emit();
    });
  }
}