<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ProfileService } from 'src/app/services/profile.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Car } from 'src/app/models/articles';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  myProfile: any;
  newCar : any;
  newCarBrandId: number;
  brands: any[] = [];
  newTitle = "";
  newText = "";
  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getBrands();
    this.getMyProfile();
  }

  getMyProfile() {
    this.profileService.getMyProfile().subscribe(res => {
      this.myProfile = res;
      this.myProfile = this.myProfile[0];
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe( res => {
      this.brands = res;
    });
    console.log(this.brands);
  }
  onCreateCar(){
    console.log('This is a method that sends data to back');
      // const brand = this.brands.find(item => Number(this.newCarBrandId) === item.id);
      this.newCar = {
        text: this.newText,
        // author: this.myProfile.user,
        title: this.newTitle,
        // created_at: '11-11-20',
        // brand: brand
      };
      this.brandService.createCar(this.newCarBrandId, this.newCar).subscribe(res =>
        this.newCar = null)
      this.newText = "";
      this.newTitle = "";
      this.newCarBrandId = 0;
    console.log(this.newCar);
  }

}
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from 'src/app/services/brand.service';
import { ProfileService } from 'src/app/services/profile.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Car } from 'src/app/models/articles';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  myProfile: any;
  newCar : any;
  newCarBrandId: number;
  brands: any[] = [];
  newTitle = "";
  newText = "";
  constructor(
    private route: ActivatedRoute,
    private brandService: BrandService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.getBrands();
    this.getMyProfile();
  }

  getMyProfile() {
    this.profileService.getMyProfile().subscribe(res => {
      this.myProfile = res;
      this.myProfile = this.myProfile[0];
    });
  }

  getBrands(){
    this.brandService.getBrands().subscribe( res => {
      this.brands = res;
    });
    console.log(this.brands);
  }
  onCreateCar(){
    console.log('This is a method that sends data to back');
      // const brand = this.brands.find(item => Number(this.newCarBrandId) === item.id);
      this.newCar = {
        text: this.newText,
        // author: this.myProfile.user,
        title: this.newTitle,
        // created_at: '11-11-20',
        // brand: brand
      };
      this.brandService.createCar(this.newCarBrandId, this.newCar).subscribe(res =>
        this.newCar = null)
      this.newText = "";
      this.newTitle = "";
      this.newCarBrandId = 0;
    console.log(this.newCar);
  }

}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
