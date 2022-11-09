import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcartComponent } from './listcart.component';

describe('ListcartComponent', () => {
  let component: ListcartComponent;
  let fixture: ComponentFixture<ListcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
