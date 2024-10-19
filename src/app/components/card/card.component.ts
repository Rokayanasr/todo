import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { ITask } from '../../model/task';
import { BrowserModule } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit, OnChanges {
  @Input() task!: ITask;
  faCheckCircle = faCheckCircle;
  @Output() markAsCompletedCard = new EventEmitter<number>();
  formattedDate!: string ;

  ngOnInit(): void {
    initFlowbite();
  }
  ngOnChanges(): void {
    console.log(this.task);
  }
  onCompleteTask() {
    this.markAsCompletedCard.emit(this.task.id);
  }

  showDetails(task: any) {
    let formattedDate = (task.time).toISOString().split('T')[0];
    console.log(formattedDate);
    console.log(task);
    return formattedDate;

  }
}
