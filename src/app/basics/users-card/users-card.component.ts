import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {
  isEditMode: boolean = false;
  editValue: string = '';
  // Properties with Input decorator are waiting from parent to be initialized
  @Input() name: string = ''; 
  @Input() age: number  = 0; 
  @Input() proffesion: string = ''; 
  
  //Properties with Output decorator can emit event that will be listenable from outside
  @Output() deleteUser = new EventEmitter<string>();

  @Output() proffesionChange = new EventEmitter<string>();

  onDelete() {
    // this function will emit event and pass index as argument
    // if we want to pass more than one argument we'll use Object type for example
    // { index: index, name: name } etc..
    this.deleteUser.emit(this.name);
  }
  onEdit() {
    this.isEditMode = true;
    this.editValue = this.proffesion
  }
  submitEdit() {
    this.isEditMode = false;
    this.proffesionChange.emit(this.editValue);
    this.editValue = '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
