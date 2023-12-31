import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit  {
  @Input() task : Task|undefined;
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  ngOnInit(): void {
      console.log(this.task);
  }

  onDelete(task:Task|undefined){
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task|undefined){
    this.onToggleReminder.emit(task);
  }
} 
