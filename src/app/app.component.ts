import { Component } from '@angular/core';
import { ColorDirective } from './directivas/color.directive';
import { OnDirective } from './directivas/on.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
