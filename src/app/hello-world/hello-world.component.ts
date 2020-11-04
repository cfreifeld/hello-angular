import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  message = 'this is my message';
  courses = [
    {title: 'CS5200', id: 123},
    {title: 'CS5610', id: 234},
    {title: 'CS3200', id: 345},
    {title: 'CS4550', id: 456}
  ];
  courseTitle: string;
  constructor() { }

  ngOnInit(): void {
    // this.message = 7;
  }

  deleteCourse(id: number): void {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  addCourse(courseTitle: string): void {
    this.courses.push({title: courseTitle, id: new Date().getTime()});
    this.courseTitle = '';
  }
}
