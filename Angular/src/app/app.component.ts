import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: "./app.component.html",
})
export class AppComponent  { 
  name: string = 'Angular 2';

ngOnInit(){
  console.log("app-component Init");
}

 }
