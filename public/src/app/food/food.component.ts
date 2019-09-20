import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  @Input() selectedTask: any; // use the @Input decorator to indicate this comes from the parent
  @Output() aTaskEventEmitter = new EventEmitter();
  constructor() { }

  triggerEvent() {
    this.aTaskEventEmitter.emit(7);
  }
}


