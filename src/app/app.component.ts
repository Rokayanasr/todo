import { ITask, ApiResponse, tasks } from './model/task';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPlus,
  faEllipsis,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { TodoService } from './services/todo.service';
import { CommonModule, DatePipe } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { TaskItemComponent } from "./components/task-item/task-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, DatePipe, CardComponent, TaskItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  todoService = inject(TodoService);
  todoList: ITask[] = [];
  taskList: ITask[] = [];
  selectedTask?: ITask;
  title = 'todo';
  faPlus = faPlus;
  faEllipsis = faEllipsis;
  faCheckCircle = faCheckCircle;

  ngOnInit(): void {
    this.loadAllTasks();
  }
  
  loadAllTasks() {
    this.todoService.getAllTasks().subscribe(
      ({ todos }) => {
        // use spread opertator to create new array with new properties that is not came from api (description, status, time, priority)
        this.taskList = todos.map((taskItem, index) => ({
          ...taskItem,
          ...tasks[index],
          time: new Date(),
        }));
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // when tasks completed then direct it to done collumn
  markAsCompleted(id: number) {
    this.selectedTask = this.taskList.find((taskItem) => taskItem.id === id);

    if (this.selectedTask) {
      console.log(this.selectedTask.status);
      this.selectedTask.status = 'done';
      // this.loadAllTasks();
      console.log(this.selectedTask.status);
      
    } else {
      console.error(`Task with ID ${id} could not be found`);
    }
  }

  showTaskDetails(task: ITask) {
    this.selectedTask = task;
  }

  // تحديث المهمة لما تتعدل في TaskDetailComponent
  updateTask(updatedTask: ITask) {
    const taskIndex = this.taskList.findIndex(taskItem => taskItem.id === updatedTask.id);
    if (taskIndex > -1) {
      this.taskList[taskIndex] = updatedTask;
      this.selectedTask = undefined; // غلق شاشة التفاصيل بعد الحفظ
    }
  }
}
