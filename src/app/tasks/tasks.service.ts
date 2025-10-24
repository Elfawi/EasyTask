import { Injectable } from '@angular/core';
import { type NewTaskData } from './task/task.model';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];
  selectedTaskId!: string;
  isEditFormVisible = false;
  constructor() {
    const tasks = localStorage.getItem('tasks') || null;
    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      userId: userId,
      ...taskData,
    });
    this.savetasksToLocalStorage();
  }
  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.savetasksToLocalStorage();
  }
  getTaskById(taskId: string) {
    return this.tasks.find((task) => task.id === taskId)!;
  }
  editTask(taskId: string, taskData: NewTaskData) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...taskData };
    this.savetasksToLocalStorage();
  }
  setSelectedTaskId(taskId: string) {
    this.selectedTaskId = taskId;
  }
  onOpenEditTask(taskId: string) {
    this.selectedTaskId = taskId;
  }
  private savetasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
