import { EmitterVisitorContext } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  text:string = "";
  day:string = "";
  reminder: boolean = false;
  showAddTaskForm: boolean = false;
  subcription:Subscription|undefined;

  constructor(private uiService:UiService){
    this.subcription = this.uiService.onToggle().subscribe(
      (value) => { this.showAddTaskForm = value}
    );
  }
  ngOnInit(): void {
      
  }

  onSubmit(){
    if(!this.text && !this.day){
      alert('please provide data');
      return;
    }
    const newTask = {
      text:this.text,
      day:this.day,
      reminder:this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = "";
    this.day = "";
    this.reminder = false;
    this.uiService.toggleAddTask();
  }
}
