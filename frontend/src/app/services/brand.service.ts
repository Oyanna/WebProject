<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { brands} from './../db/brand';
import { Brand} from '../models/articles';
import { cars } from '../db/car';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/brands/`);
  }

  getBrand(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/brands/${id}/`)
  }
  createCar(id:number, car:any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/brands/${id}/cars/`, car)
  }

  getCarsOfBrand(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/brands/${id}/cars`);
  }

=======
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { brands} from './../db/brand';
import { Brand} from '../models/articles';
import { cars } from '../db/car';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  BASE_URL = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getBrands(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/brands/`);
  }

  getBrand(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/brands/${id}/`)
  }
  createCar(id:number, car:any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/api/brands/${id}/cars/`, car)
  }

  getCarsOfBrand(id: number): Observable<any> {
    return this.http.get(`${this.BASE_URL}/api/brands/${id}/cars`);
  }

>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
}