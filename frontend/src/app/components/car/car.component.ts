<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/articles';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars: Car[];
  
  constructor(
    private carServices: CarService
    ) { }

  ngOnInit() {
    this.carServices.getCars().subscribe( res => {
      this.cars = res;
      console.log(res);
    });
  }


=======
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../services/car.service';
import {Car} from '../../models/articles';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars: Car[];
  
  constructor(
    private carServices: CarService
    ) { }

  ngOnInit() {
    this.carServices.getCars().subscribe( res => {
      this.cars = res;
      console.log(res);
    });
  }


>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
}