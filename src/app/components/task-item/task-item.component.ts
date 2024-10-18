import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../model/task';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
  @Input() task!: ITask; 
  @Output() updateTask = new EventEmitter<ITask>();

  editedTask: ITask = { ...this.task };

  saveChanges() {
    this.updateTask.emit(this.editedTask);
  }
 }
