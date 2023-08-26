import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoistService } from '../todoist.service';
import { NgForm } from '@angular/forms';
import { NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent {
  @Input() isNewTask: true | undefined;
  @Input() id!: string;
  @Input() content!: string;
  @Input() description!: string;
  @Input() isComplete!: boolean;
  @Output() taskUpdated = new EventEmitter<void>();

  position = NbGlobalPhysicalPosition.BOTTOM_RIGHT;

  constructor(
    private todoistService: TodoistService,
    private toastrService: NbToastrService
  ) {}

  showToast() {
    this.toastrService.show('Success', `Your Request has been completed`, {
      position: this.position,
      status: 'success',
    });
  }

  addTask(form: NgForm) {
    this.todoistService.addTask(form.value).then(() => {
      this.taskUpdated.emit();
      this.showToast();
    });
  }

  deleteTask(id: string) {
    this.todoistService.deleteTask(id).then(() => {
      this.taskUpdated.emit();
      this.showToast();
    });
  }

  closeTask(id: string) {
    this.todoistService.closeTask(id).then(() => {
      this.taskUpdated.emit();
      this.showToast();
    });
  }

  editTask(id: string, form: NgForm) {
    this.todoistService.editTask(id, form.value).then(() => {
      this.taskUpdated.emit();
      this.showToast();
    });
  }
}
