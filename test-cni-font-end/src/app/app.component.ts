import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';
  test = 'teste';
  funTest(num: number) { 
    return num + 3;
  };
  arrTest = [1,2,3,4,5,6]
}
