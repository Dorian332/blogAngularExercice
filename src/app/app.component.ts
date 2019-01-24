import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogAngular';
  posts = [
    {
      title: 'Mon premier post',
      content: 'Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum',
    },
    {
      title: 'Mon deuxieme post',
      content: 'Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum',
    }
    , {
      title: 'Mon troisieme post',
      content: 'Et quia Montius inter dilancinantium manus spiritum efflaturus Epigonum',
    }
  ];
}
