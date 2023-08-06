import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-alone',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-alone.component.html',
  styleUrls: ['./counter-alone.component.css']
})
export class CounterAloneComponent implements OnInit {

  counter : number = 10
  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(){
    this.counter++;
  }
}
