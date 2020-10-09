import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public one = 0;
  public two = 1;
  public three = 2;
  public four;

  public ninetyNine = 99;
  public eleventh = 11;
  public thousand = 100013;
  public test;

  public aString: string = 'This is a reasonably long string aslkdfjlaskdasfasdfasdfasdf'
}
