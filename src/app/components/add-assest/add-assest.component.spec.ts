import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssestComponent } from './add-assest.component';

describe('AddAssestComponent', () => {
  let component: AddAssestComponent;
  let fixture: ComponentFixture<AddAssestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
