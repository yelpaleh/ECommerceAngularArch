import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-angular-life-cycle',
  imports: [],
  templateUrl: './angular-life-cycle.component.html',
  styleUrl: './angular-life-cycle.component.css'
})
export class AngularLifeCycleComponent implements
  OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() inputValue: string = '';

  constructor() {
    console.log('0. constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('1. ngOnChanges called: Called after the constructor, whenever @Input() properties change.', changes);
  }

  ngOnInit(): void {
    console.log('2. ngOnInit called: Called once after the first ngOnChanges(initialization logic).');
  }

  ngDoCheck(): void {
    console.log('3. ngDoCheck called: Called on every change detection cycle. Runs after ngOnInit and every time any input change.');
  }

  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit called: Called once after Angular projects external content (i.e., <ng-content>, not used here).');
  }

  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked called: Called after every check of the projected content.');
  }

  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit called: Called once after the components view (and child views) are initialized.');
  }

  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked called: Called after every check of the components views and child views.');
  }

  ngOnDestroy(): void {
    console.log('8. ngOnDestroy called: Called just before the component is destroyed. Cleanup logic goes here.');
  }
}