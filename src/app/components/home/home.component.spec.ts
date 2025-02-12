import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the first page', () => {
    expect(component.currentPage).toBe(1);
  });

  it('should calculate total pages correctly', () => {
    expect(component.totalPages).toBe(Math.ceil(component.coupons.length / component.itemsPerPage));
  });

  it('should return the correct paginated coupons', () => {
    const paginatedCoupons = component.paginatedCoupons;
    expect(paginatedCoupons.length).toBe(component.itemsPerPage);
    expect(paginatedCoupons[0].brand).toBe('Jarvis');
  });

  it('should navigate to the next page', () => {
    component.nextPage();
    expect(component.currentPage).toBe(2);
  });

  it('should not navigate to the next page if on the last page', () => {
    component.currentPage = component.totalPages;
    component.nextPage();
    expect(component.currentPage).toBe(component.totalPages);
  });

  it('should navigate to the previous page', () => {
    component.currentPage = 2;
    component.previousPage();
    expect(component.currentPage).toBe(1);
  });

  it('should not navigate to the previous page if on the first page', () => {
    component.previousPage();
    expect(component.currentPage).toBe(1); 
  });

  it('should calculate the end index correctly', () => {
    component.currentPage = 1;
    expect(component.getEndIndex()).toBe(5); 
    component.currentPage = 2;
    expect(component.getEndIndex()).toBe(10); 
  });
});
