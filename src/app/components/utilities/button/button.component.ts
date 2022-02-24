import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text =  'Add';
  @Output() btnClick =new EventEmitter();
  constructor() { 
  }

  ngOnInit(): void {
  }

  AddClick(): void{
    this.btnClick.emit();
  }

}
