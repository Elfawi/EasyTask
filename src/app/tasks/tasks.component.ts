import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { TasksService } from './tasks.service';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskFormComponent, EditTaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isFormVisible = false;
  isEditFormVisible = this.tasksService.isEditFormVisible;
  constructor(private tasksService: TasksService) {}
  onOpenAddTask() {
    this.isFormVisible = true;
  }
  onEditTask() {
    this.tasksService.isEditFormVisible = true;
    this.isEditFormVisible = this.tasksService.isEditFormVisible;
  }
  onCloseAddTask() {
    this.isFormVisible = false;
  }
  onCloseEditTask() {
    this.isEditFormVisible = false;
  }
  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }
}
