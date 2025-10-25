import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  imports: [CardComponent, DatePipe],
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private tasksService: TasksService) {}
  @Output() open = new EventEmitter<void>();
  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
  onEditTask() {
    this.open.emit();
    this.tasksService.onOpenEditTask(this.task.id);
  }
}
