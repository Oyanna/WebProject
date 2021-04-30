<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { User, Profile } from 'src/app/models/identity';
import {ProfileService} from './../../services/profile.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.component.html',
  styleUrls: ['./others-profile.component.css']
})
export class OthersProfileComponent implements OnInit {
  id = 0;
  profile: Profile;
  following: any[] = [];
  followers: any[] = [];
  cars: any[] = [];
  following_count: number = 0;
  followers_count: number = 0;
  cars_count: number = 0;
  
  constructor(
    private route: ActivatedRoute,
    private otherProfileService: ProfileService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.id = +routeParams.id;
      this.getProfile();
      this.getProfileCars();
      this.getProfileFollowing();
      this.getProfileFollowers();
    });
  }

  getProfile() {
    this.otherProfileService.getProfile(this.id).subscribe(res => {
      this.profile = res;
      console.log(res)

    });
  }
  getProfileFollowing() {
    this.otherProfileService.getProfileFollowing(this.id).subscribe(res => {
      this.following = res;
      this.following_count = (this.following).length;
    });
    
  }
  getProfileFollowers() {
    this.otherProfileService.getProfileFollowers(this.id).subscribe(res => {
      this.followers = res;
      this.followers_count = (this.followers).length;
      // console.log(res)

    });
  }
  getProfileCars() {
    this.otherProfileService.getProfileCars(this.id).subscribe(res => {
      this.cars = res;
      this.cars_count = (this.cars).length;
      // console.log(res)
    });
  }


}
=======
import { Component, OnInit } from '@angular/core';
import { User, Profile } from 'src/app/models/identity';
import {ProfileService} from './../../services/profile.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-others-profile',
  templateUrl: './others-profile.component.html',
  styleUrls: ['./others-profile.component.css']
})
export class OthersProfileComponent implements OnInit {
  id = 0;
  profile: Profile;
  following: any[] = [];
  followers: any[] = [];
  cars: any[] = [];
  following_count: number = 0;
  followers_count: number = 0;
  cars_count: number = 0;
  
  constructor(
    private route: ActivatedRoute,
    private otherProfileService: ProfileService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      this.id = +routeParams.id;
      this.getProfile();
      this.getProfileCars();
      this.getProfileFollowing();
      this.getProfileFollowers();
    });
  }

  getProfile() {
    this.otherProfileService.getProfile(this.id).subscribe(res => {
      this.profile = res;
      console.log(res)

    });
  }
  getProfileFollowing() {
    this.otherProfileService.getProfileFollowing(this.id).subscribe(res => {
      this.following = res;
      this.following_count = (this.following).length;
    });
    
  }
  getProfileFollowers() {
    this.otherProfileService.getProfileFollowers(this.id).subscribe(res => {
      this.followers = res;
      this.followers_count = (this.followers).length;
      // console.log(res)

    });
  }
  getProfileCars() {
    this.otherProfileService.getProfileCars(this.id).subscribe(res => {
      this.cars = res;
      this.cars_count = (this.cars).length;
      // console.log(res)
    });
  }


}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
