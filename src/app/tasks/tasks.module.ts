import { NgModule } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskFormComponent } from './add-task-form/add-task-form.component';
import { EditTaskFormComponent } from './edit-task-form/edit-task-form.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TasksComponent,
    AddTaskFormComponent,
    TaskComponent,
    EditTaskFormComponent,
  ],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, SharedModule],
})
export class TasksModule {}
