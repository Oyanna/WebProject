<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarComponent } from './create-car.component';

describe('CreateCarComponent', () => {
  let component: CreateCarComponent;
  let fixture: ComponentFixture<CreateCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCarComponent } from './create-car.component';

describe('CreateCarComponent', () => {
  let component: CreateCarComponent;
  let fixture: ComponentFixture<CreateCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
