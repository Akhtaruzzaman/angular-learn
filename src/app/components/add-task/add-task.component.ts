import { Component, Input, OnInit } from '@angular/core';
import {Task} from '../../interface/Task'
import { TaskService } from 'src/app/services/task.service';
import { NotificationService } from 'src/app/notification.service'; 

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  day!: string;
  reminder:boolean=false;

  constructor(private taskService: TaskService,private notification:NotificationService) { }

  ngOnInit(): void {
  }
  onTaskSubmit(){
    console.log('test');
    if(!this.text){
      this.notification.showError('Please add some text', 'Filed Required');
      return;
    }
    if(!this.day){
      this.notification.showError('Please select a date', 'Filed Required');
      return;
    }
    var newTask={
      text:this.text,
      day:this.day,
      reminder:this.reminder,
    }
    this.taskService.addTask(newTask).subscribe();

    this.text='';
    this.day='';
    this.reminder=false;
    this.notification.showSuccess('Added Successfully', 'Success');
  }
}
