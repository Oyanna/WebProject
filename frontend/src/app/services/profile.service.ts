<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User,Profile} from './../models/identity';
import {users} from './../db/users';
import {profiles} from './../db/profile'
import {following} from './../db/following';
import {followers} from './../db/followers';
import {cars} from './../db/car';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  myid = JSON.parse(localStorage.getItem('myProfile')).id;
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  
  getProfile(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${id}/`);
  }
  getMyProfile(): Observable<any> {
    console.log("ok")
    return this.http.get(`${this.BASE_URL}/auth/my-profile/`);
  }
  getMyFollowing(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${this.myid}/following/`);
  } 
  getProfileFollowing(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${id}/following/`);
  } 
  getMyFollowers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${this.myid}/followers/`);
  } 
  getProfileFollowers(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${id}/followers/`);
  } 
  getMyCars(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/profile/${this.myid}/cars/`);
  }
  getProfileCars(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/profile/${id}/cars/`);
  }
}
=======
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {User,Profile} from './../models/identity';
import {users} from './../db/users';
import {profiles} from './../db/profile'
import {following} from './../db/following';
import {followers} from './../db/followers';
import {cars} from './../db/car';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  myid = JSON.parse(localStorage.getItem('myProfile')).id;
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) { }
  
  getProfile(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${id}/`);
  }
  getMyProfile(): Observable<any> {
    console.log("ok")
    return this.http.get(`${this.BASE_URL}/auth/my-profile/`);
  }
  getMyFollowing(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${this.myid}/following/`);
  } 
  getProfileFollowing(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${id}/following/`);
  } 
  getMyFollowers(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${this.myid}/followers/`);
  } 
  getProfileFollowers(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/auth/profile/${id}/followers/`);
  } 
  getMyCars(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/profile/${this.myid}/cars/`);
  }
  getProfileCars(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/profile/${id}/cars/`);
  }
}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
