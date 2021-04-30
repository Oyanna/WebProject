<<<<<<< HEAD
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BrandService} from '../../services/brand.service';
import {Brand} from '../../models/articles';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  
  brands: Brand[];
  
  constructor(
    private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getBrands().subscribe( res => {
      this.brands = res;
      console.log(this.brands)
    });
  }


=======
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BrandService} from '../../services/brand.service';
import {Brand} from '../../models/articles';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  
  brands: Brand[];
  
  constructor(
    private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getBrands().subscribe( res => {
      this.brands = res;
      console.log(this.brands)
    });
  }


>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
}