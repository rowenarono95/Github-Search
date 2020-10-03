import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service'
import { Profile } from '../profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile

  constructor(private profileService: ProfileServiceService) {
  }

  performsearch(user) {
    this.profileService.profileRequest(user).then((res) => {
      this.profile = this.profileService.profile;
    }, err => {
      console.log(err);
    })

  }
  ngOnInit(): void {
    this.performsearch('rowenarono95');
  }
}
