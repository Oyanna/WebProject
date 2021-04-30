import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CarComponent } from './components/car/car.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BrandDetailedComponent } from './components/brand-detailed/brand-detailed.component';
import { CarDetailedComponent } from './components/car-detailed/car-detailed.component';
import { OthersProfileComponent } from './components/others-profile/others-profile.component';
import { CreateCarComponent } from './components/create-car/create-car.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {LoginComponent} from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BrandsComponent,
    CarComponent,
    ProfileComponent,
    BrandDetailedComponent,
    CarDetailedComponent,
    OthersProfileComponent,
    CreateCarComponent,
    MainPageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
