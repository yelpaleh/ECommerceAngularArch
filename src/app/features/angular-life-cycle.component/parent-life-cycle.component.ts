import { CommonModule } from '@angular/common';
import { 
  Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy 
} from '@angular/core';
import { AngularLifeCycleComponent } from './angular-life-cycle.component';

@Component({
  selector: 'app-root',
    imports: [CommonModule,AngularLifeCycleComponent],
  templateUrl: './parent-life-cycle.component.html',
})
export class ParentLifeCycleComponent {
  showChild = true;
  parentValue = 'Initial value';

  toggleChild() {
    this.showChild = !this.showChild;
  }

  updateValue() {
    this.parentValue = 'Updated at ' + new Date().toLocaleTimeString();
  }
}
