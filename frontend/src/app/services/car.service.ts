<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cars} from './../db/car';
import { users} from '../db/users';
import { Car} from '../models/articles';
import { comments } from '../db/comments';
import { likes } from '../db/likes';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/`);
  }

  getCar(id:number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/${id}/`);
  }

  getCommentsOfCar(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/${id}/comment/`);
  }
  createCommentsOfCar(id: number, comment: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/cars/${id}/comment/`, comment);
  }
  // deleteCommentsOfCar(id: number): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/api/cars/${id}/comment/`);
  // }

  getLikesOfCar(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/${id}/like/`);
  }
  createLikesOfCar(id: number, like: any): Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/cars/${id}/like/`, like);
  }
  deleteLikesOfCar(id: number, id2: number): Observable<any>{
    return this.http.delete(`${this.BASE_URL}/api/cars/${id}/like/${id2}`);
  }

=======
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { cars} from './../db/car';
import { users} from '../db/users';
import { Car} from '../models/articles';
import { comments } from '../db/comments';
import { likes } from '../db/likes';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/`);
  }

  getCar(id:number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/${id}/`);
  }

  getCommentsOfCar(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/${id}/comment/`);
  }
  createCommentsOfCar(id: number, comment: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/cars/${id}/comment/`, comment);
  }
  // deleteCommentsOfCar(id: number): Observable<any> {
  //   return this.http.delete(`${this.BASE_URL}/api/cars/${id}/comment/`);
  // }

  getLikesOfCar(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/cars/${id}/like/`);
  }
  createLikesOfCar(id: number, like: any): Observable<any>{
    return this.http.post(`${this.BASE_URL}/api/cars/${id}/like/`, like);
  }
  deleteLikesOfCar(id: number, id2: number): Observable<any>{
    return this.http.delete(`${this.BASE_URL}/api/cars/${id}/like/${id2}`);
  }

>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
}