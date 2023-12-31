import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { ToolBarComponent } from 'src/app/shared/components/tool-bar/tool-bar.component';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [CommonModule, CounterAloneComponent],
  templateUrl: './alone-page.component.html',
  styleUrls: ['./alone-page.component.css']
})
export class AlonePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show(e : Event){
    console.log(e)
  }
}
