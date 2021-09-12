import { BasicService } from './../basic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
  constructor(private basicSerivce: BasicService) {  }
  users: any[] = [];
  title: string = "Welcome"
  description: string = "this is students list:"
  
  deleteUserByName(name: string) {
    this.users = this.users.filter(user => user.name !== name);
  }

  ngOnInit(): void {
    this.users = this.basicSerivce.fetchUsers();
  }

}
