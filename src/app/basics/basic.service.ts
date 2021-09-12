import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

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

  fetchUsers() {
    return this.users;
  }
  constructor() { }
}
