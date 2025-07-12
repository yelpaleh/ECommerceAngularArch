
import { Component, OnChanges, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  template: '<p>Received Message: {{ receivedMessage }}</p>',
})

export class ParentComponent {
  // Parent component logic goes here
  receivedMessage: string = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
  ngOnChanges() {
    console.log('Parent component OnChanges called');
  }
}
