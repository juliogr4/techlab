import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial-detail',
  templateUrl: './tutorial-detail.component.html',
  styleUrls: ['./tutorial-detail.component.css']
})
export class TutorialDetailComponent {
  tutorial: any = {
    "description": "This is a sql tutorial",
    "name": "SQL: From Zero to Hero",
    "image": "assets/images/sql-png.png",
    "initialTopic": "ola-mundo",
    "topics": [
      { 
        "title": "topic1", 
        "subtopics": [
          { "name": "first sub", "link": "ola-mundo" },
          { "name": "first sub", "link": "testando" },
          { "name": "first sub", "link": "luna" },
        ] 
      },
      { "title": "topic1" },
      { "title": "topic1" },
      { "title": "topic1" }
    ]
  };
}
