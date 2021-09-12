import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  title: string = "Welcome"
  description: string = "this is students list:"
  users = [
    {
      name: 'George',
      age: 20,
      job: 'frontend'
    },
    {
      name: 'Anna',
      age: 19,
      job: 'UX/UI'
    },
    {
      name: 'Luka',
      age: 18,
      job: 'backend'
    }
  ]

  deleteUserByName(name: string) {
    this.users = this.users.filter(user => user.name !== name);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
