import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tutorials: any[] = [
    { "image": "assets/images/sql.jpg", "title": "Hands on SQL", "name": "sql" },
    { "image": "assets/images/sql-png.png" },
    { "image": "assets/images/sql.jpg" },
    { "image": "assets/images/sql.jpg" },
    { "image": "assets/images/sql.jpg" },
  ];
}
