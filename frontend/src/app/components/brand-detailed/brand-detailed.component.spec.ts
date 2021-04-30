<<<<<<< HEAD
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetailedComponent } from './brand-detailed.component';

describe('BrandDetailedComponent', () => {
  let component: BrandDetailedComponent;
  let fixture: ComponentFixture<BrandDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
=======
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetailedComponent } from './brand-detailed.component';

describe('BrandDetailedComponent', () => {
  let component: BrandDetailedComponent;
  let fixture: ComponentFixture<BrandDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> a3c535873b43a0139387976543edb6ae22d37612
