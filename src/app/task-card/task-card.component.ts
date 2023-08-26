import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoistService } from '../todoist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() id!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() isComplete!: boolean;
  @Output() taskDeleted = new EventEmitter<void>();
  @Output() taskUpdated = new EventEmitter<void>();

  constructor(private todoistService: TodoistService) {}

  deleteTask(id: string) {
    this.todoistService.deleteTask(id).then(() => {
      this.taskDeleted.emit();
    });
  }

  closeTask(id: string) {
    this.todoistService.closeTask(id).then(() => {
      this.taskUpdated.emit();
    });
  }

  updateTask(id: string, form: NgForm) {
    this.todoistService.updateTask(id, form.value).then(() => {
      this.taskUpdated.emit();
    });
  }
}
