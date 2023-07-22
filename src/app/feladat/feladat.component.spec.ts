import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeladatComponent } from './feladat.component';

describe('FeladatComponent', () => {
  let component: FeladatComponent;
  let fixture: ComponentFixture<FeladatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeladatComponent]
    });
    fixture = TestBed.createComponent(FeladatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
