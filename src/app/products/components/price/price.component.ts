import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{


  @Input()
  public price : number = 0;
  
  subscription$ : Subscription = new Subscription();

  constructor() { }


    //1
    ngOnChanges(changes: SimpleChanges): void {
      console.log('HIJO - ngOnChanges')
      console.log({ changes })
    }
    
    //2
    ngOnInit(): void {
      console.log('HIJO - ngOnInit')

      //para uso de onDestroy
      this.subscription$ = interval(1000).subscribe({
        next: value => {
          console.log(value)
        }
      })
    }
  
    //3
    ngDoCheck(): void {
      console.log('HIJO - ngDoCheck')
    }
  
    //4
    ngAfterContentInit(): void {
      console.log('HIJO - ngAfterContentInit')
    }
  
    //5
    ngAfterContentChecked(): void {
      console.log('HIJO - ngAfterContentChecked')
    }
  
    //6
    ngAfterViewInit(): void {
      console.log('HIJO - ngAfterViewInit')
    }
  
    //7
    ngAfterViewChecked(): void {
      console.log('HIJO - ngAfterViewChecked')
    }
  
    //8
    ngOnDestroy(): void {
      console.log('HIJO - ngOnDestroy')
      this.subscription$.unsubscribe();
    }
  
}
