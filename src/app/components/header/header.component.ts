import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string="Task Tracker";
  showAddTask: boolean = false;
  subcription:Subscription|undefined;

  constructor(private uiService:UiService, private router:Router){
    this.subcription = this.uiService.onToggle().subscribe(
        (value)=>{console.log("obs ",value);this.showAddTask = value;}
      );
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  toggleAddTask(){
    console.log('Add');
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string):boolean{
    return this.router.url === route;
  }
}
