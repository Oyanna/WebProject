<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { User, Profile } from 'src/app/models/identity';
import {ProfileService} from './../../services/profile.service';
import { Following } from 'src/app/models/activity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myProfile: Profile;
  profile: Profile;
  following: any[] = [];
  followers: any[] = [];
  cars: any[] = [];
  following_count: number = 0;
  followers_count: number = 0;
  cars_count: number = 0;
  
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getMyProfile();
    this.getMyCar();
    this.getMyFollowing();
    this.getMyFollowers();
  }

  getMyProfile() {
    this.profileService.getMyProfile().subscribe(res => {
      this.myProfile = res;
      this.myProfile = this.myProfile[0];
    });
  }
  getMyFollowing() {
    this.profileService.getMyFollowing().subscribe(res => {
      this.following = res;
      this.following_count = (this.following).length;
    });
  }
  getMyFollowers() {
    this.profileService.getMyFollowers().subscribe(res => {
      this.followers = res;
      this.followers_count = (this.followers).length;
    });
  }
  getMyCar() {
    this.profileService.getMyCars().subscribe(res => {
      this.cars = res;
      this.cars_count = (this.cars).length;
    });
  }


}
=======
import { Component, OnInit } from '@angular/core';
import { User, Profile } from 'src/app/models/identity';
import {ProfileService} from './../../services/profile.service';
import { Following } from 'src/app/models/activity';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myProfile: Profile;
  profile: Profile;
  following: any[] = [];
  followers: any[] = [];
  cars: any[] = [];
  following_count: number = 0;
  followers_count: number = 0;
  cars_count: number = 0;
  
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getMyProfile();
    this.getMyCar();
  }

  getMyProfile() {
    this.profileService.getMyProfile().subscribe(res => {
      this.myProfile = res;
      this.myProfile = this.myProfile[0];
    });
  }
 
  getMyCar() {
    this.profileService.getMyCars().subscribe(res => {
      this.cars = res;
      this.cars_count = (this.cars).length;
    });
  }


}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
