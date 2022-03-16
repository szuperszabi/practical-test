import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuItemComponent } from './food-menu-item.component';

describe('FoodMenuItemComponent', () => {
  let component: FoodMenuItemComponent;
  let fixture: ComponentFixture<FoodMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
