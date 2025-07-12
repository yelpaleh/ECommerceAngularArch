import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-child',  
    standalone: true,
    template: '<button (click)="sendMeassage()">Send Message</button>', 
})

export class ChildComponent {
  // Child component logic goes here
  @Output() messageEvent = new EventEmitter<string>();
  
  sendMeassage() {
    this.messageEvent.emit('Hello from Child Component!');
  }
}