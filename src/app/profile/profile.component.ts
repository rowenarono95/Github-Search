import { Component, OnInit } from '@angular/core';
import { ProfileServiceService } from '../profile-service.service'
import { Profile } from '../profile';
import { Repo } from '../repo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile
  repos: Repo;

  constructor(private profileService: ProfileServiceService) {
  }

  performsearch(user) {
    this.profileService.profileRequest(user).then((res) => {
      this.profile = this.profileService.profile;
    }, err => {
      console.log(err);
    })
    this.profileService.displayRepos(user).then((res) => {
      this.repos = this.profileService.repo;
    }, error => {
      console.log(error);
    })



  }

  ngOnInit(): void {
    this.performsearch('rowenarono95');
  }
}
