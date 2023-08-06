import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {


  // @Input()
  public isVisible: boolean = true

  public price : number = 0

  constructor() { }

  //1
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes })
    console.log('ngOnChanges')
  }

  //2
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  //3
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  //4
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  //5
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked')
  }

  //6
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
  }

  //7
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }

  //8
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }


  increasePrice(){
    this.price++;
  }



}
