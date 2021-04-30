import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";
import { BrandsComponent } from "./components/brands/brands.component";
import { CarComponent } from "./components/car/car.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { BrandDetailedComponent } from "./components/brand-detailed/brand-detailed.component";
import { CarDetailedComponent } from "./components/car-detailed/car-detailed.component";
import { OthersProfileComponent } from "./components/others-profile/others-profile.component";
import { MainPageComponent } from "./components/main-page/main-page.component";
import { LoginComponent } from "./components/login/login.component";
const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: MainPageComponent },
      { path: "login", component: LoginComponent },
      { path: "brands", component: BrandsComponent },
      { path: "cars", component: CarComponent },
      { path: "profile", component: ProfileComponent },
      { path: "brands/:id", component: BrandDetailedComponent },
      { path: "car/:id", component: CarDetailedComponent },
      { path: "profile/:id", component: OthersProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
