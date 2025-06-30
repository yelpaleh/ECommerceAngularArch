import { Component } from '@angular/core';


@Component({
  selector: 'app-control-flow-demo',
  standalone: true,
  imports: [ ],
  templateUrl: './control-flow-demo.html',
  styleUrl: './control-flow-demo.css',
  template : ''
})

export class ControlFlowDemo {
  isLoggedIn = true;
  users = ['Alice', 'Bob', 'Charlie'];
  role = 'user';
 status = ['Pending', 'Approved', 'Rejected'];
  isFlag = false;
}
