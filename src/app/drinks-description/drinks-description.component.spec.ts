import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksDescriptionComponent } from './drinks-description.component';

describe('DrinksDescriptionComponent', () => {
  let component: DrinksDescriptionComponent;
  let fixture: ComponentFixture<DrinksDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
