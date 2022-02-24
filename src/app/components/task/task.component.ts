import { Component, OnInit } from '@angular/core';
import { Task } from '../../interface/Task';
import { TaskService } from '../../services/task.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NotificationService } from 'src/app/notification.service'; 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  fatimes = faTimes;
  constructor(private taskService: TaskService, private notification:NotificationService) {
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe((tasks) => (this.tasks = tasks));
  }
  onDelete(t: any) {
    this.taskService.deleteTask(t).subscribe((tasks) =>
      (this.tasks = this.tasks.filter(_ => _.id !== t.id)));
      this.notification.showWarning('Successfully deleted', 'Deleted')
    }
  toggleTask(t:Task){
    t.reminder =!t.reminder;
    this.taskService.updateTask(t).subscribe();
    this.notification.showInfo('Updated', 'Modification')
  }
}
