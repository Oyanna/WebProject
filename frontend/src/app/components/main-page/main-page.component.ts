<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { BrandService } from "../../services/brand.service";
import { CarService } from "../../services/car.service";
import { Brand } from "../../models/articles";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  brands: Brand[];
  cars: any;

  constructor(
    private brandService: BrandService,
    private carServices: CarService
  ) {}

  ngOnInit() {
    this.brandService.getBrands().subscribe((res) => {
      this.brands = res;
    });
    this.carServices.getCars().subscribe((res) => {
      this.cars = res;
      console.log(res);
    });
  }
}
=======
import { Component, OnInit } from "@angular/core";
import { BrandService } from "../../services/brand.service";
import { CarService } from "../../services/car.service";
import { Brand } from "../../models/articles";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.css"],
})
export class MainPageComponent implements OnInit {
  brands: Brand[];
  cars: any;

  constructor(
    private brandService: BrandService,
    private carServices: CarService
  ) {}

  ngOnInit() {
    this.brandService.getBrands().subscribe((res) => {
      this.brands = res;
    });
    this.carServices.getCars().subscribe((res) => {
      this.cars = res;
      console.log(res);
    });
  }
}
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
