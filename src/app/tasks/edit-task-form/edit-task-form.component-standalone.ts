import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'edit-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-task-form.component.html',
  styleUrl: './edit-task-form.component.css',
})
export class EditTaskFormComponent {
  private tasksService = inject(TasksService);
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  selectedTaskId = this.tasksService.selectedTaskId; //taskId;
  @Output() close = new EventEmitter<void>();
  constructor() {
    this.setInitialValues();
  }
  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    if (
      this.enteredTitle.trim().length === 0 ||
      this.enteredSummary.trim().length === 0 ||
      this.enteredDate.trim().length === 0
    )
      return;
    this.tasksService.editTask(this.selectedTaskId, {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
    this.close.emit();
  }
  setInitialValues() {
    const task = this.tasksService.getTaskById(this.selectedTaskId);
    this.enteredTitle = task.title;
    this.enteredSummary = task.summary;
    this.enteredDate = task.dueDate;
  }
}
