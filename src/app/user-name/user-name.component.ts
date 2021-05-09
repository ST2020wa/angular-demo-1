import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  userStatus = 'No user name';
  userName = '';

  constructor() {  }

  ngOnInit(): void {
  }
  onCreateUser(){
    this.userStatus = this.userName + ' has been created';
  }
  onUpdateUser(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
