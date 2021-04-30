<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/articles';

@Component({
  selector: 'app-brand-detailed',
  templateUrl: './brand-detailed.component.html',
  styleUrls: ['./brand-detailed.component.css']
})
export class BrandDetailedComponent implements OnInit {
  cars : Car[];
  brand: any[];
  constructor(
    private route: ActivatedRoute,
    private BrandDetailedService: BrandService
  ) { }

  ngOnInit() {
    this.getCarsByBrand();
    this.getBrand();
  }

  getCarsByBrand() {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.BrandDetailedService.getCarsOfBrand(id).subscribe(res => {
      this.cars = res;
      console.log(this.cars);
    });

  }
  getBrand() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BrandDetailedService.getBrand(id).subscribe(brand => {
      this.brand = brand;
      console.log(this.brand);
      });
  }
}
=======
import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/articles';

@Component({
  selector: 'app-brand-detailed',
  templateUrl: './brand-detailed.component.html',
  styleUrls: ['./brand-detailed.component.css']
})
export class BrandDetailedComponent implements OnInit {
  cars : Car[];
  brand: any[];
  constructor(
    private route: ActivatedRoute,
    private BrandDetailedService: BrandService
  ) { }

  ngOnInit() {
    this.getCarsByBrand();
    this.getBrand();
  }

  getCarsByBrand() {
    const id = +this.route.snapshot.paramMap.get('id'); 
    this.BrandDetailedService.getCarsOfBrand(id).subscribe(res => {
      this.cars = res;
      console.log(this.cars);
    });

  }
  getBrand() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.BrandDetailedService.getBrand(id).subscribe(brand => {
      this.brand = brand;
      console.log(this.brand);
      });
  }
}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
