<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailedComponent } from './car-detailed.component';

describe('CarDetailedComponent', () => {
  let component: CarDetailedComponent;
  let fixture: ComponentFixture<CarDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailedComponent } from './car-detailed.component';

describe('CarDetailedComponent', () => {
  let component: CarDetailedComponent;
  let fixture: ComponentFixture<CarDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
