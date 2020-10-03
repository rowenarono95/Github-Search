import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Profile } from './profile'

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {


  //'https://api.github.com/users/daneden?access_token=' + apiKey


profile: Profile

constructor(private http: HttpClient) {
  this.profile = new Profile("", "", "", 0, 0, "")
}



profileRequest() {
  interface Apiresponse {
    login: string,
    avatar_url: string,
    repos: string,
    followers: number,
    following: number,
    email: string,
  }

  let promise = new Promise((resolve, reject) => {
    let finalUrl = environment.ApiUrl+ environment.Apikey
    this.http.get<Apiresponse>(finalUrl).toPromise().then(response => {
      console.log(response);
    })
  })


}
}
