import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcategoriesComponent } from './listcategories.component';

describe('ListcategoriesComponent', () => {
  let component: ListcategoriesComponent;
  let fixture: ComponentFixture<ListcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
