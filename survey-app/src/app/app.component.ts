import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Survey forms', url: '/form', icon: 'help-circle' },
    { title: 'Take a picture', url: '/picture', icon: 'camera' },
    { title: 'Survey bible', url: '/bible', icon: 'help-circle' },
    { title: 'Survey about', url: '/about', icon: 'help-circle' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }
}
