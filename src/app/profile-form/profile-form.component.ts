import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  searchName:string
  @Output() searchUser=new EventEmitter<any>();

  search(){
    this.searchUser.emit(this.searchName)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
