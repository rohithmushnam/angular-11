import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  count:number=0;
  incr(){
  this.count++;
  }

  decr(){
    this.count--;
  }
  reset(){
    this.count=0;
  }
}
