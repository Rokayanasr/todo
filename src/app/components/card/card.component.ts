import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../../model/task';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() task!: ITask;
  faCheckCircle = faCheckCircle;
  @Output() markAsCompleted = new EventEmitter<number>();

  onCompleteTask() {
    this.markAsCompleted.emit(this.task.id);
  }
}
