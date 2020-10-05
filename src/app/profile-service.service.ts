import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Profile } from './profile'
import { Repo } from './repo'


@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  profile: Profile
  repo: Repo

  constructor(private http: HttpClient) {
    this.profile = new Profile("", "", "", 0, 0, "")
    this.repo = new Repo("", "", "", "")

  }



  profileRequest(user: string) {
    interface Apiresponse {
      login: string,
      avatar_url: string,
      repos: string,
      followers: number,
      following: number,
      email: string,
    }

    let promise = new Promise((resolve, reject) => {
      let finalUrl = environment.ApiUrl + user + '?access_token=' + environment.Apikey
      this.http.get<Apiresponse>(finalUrl).toPromise().then(response => {
        this.profile = response;
        resolve();

      }, error => {
        reject();
        console.log(error);
      })
    })
    return promise;

  }
  displayRepos(user: string) {
    interface Apiresponsee {
      name: string,
      description: string,
      language: string,
      html_url: string
    }

    let promise = new Promise((resolve, reject) => {
      let finalUrl = environment.ApiUrl + user + '/repos' + '?access_token=' + environment.Apikey
      this.http.get<Apiresponsee>(finalUrl).toPromise().then(response => {
        console.log(response);

        this.repo = response;

        resolve();

      }, error => {

        reject();
        console.log(error);
      })
    })
    return promise;
  }
}
