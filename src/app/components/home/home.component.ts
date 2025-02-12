import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { CouponService } from '../../Core/services/coupons.service';
import { PipesModule } from '../../Core/pipes/pipes.module';


interface Coupon {
  discount: number;
  title: string;
  description: string;
  validUntil: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgStyle,FormsModule, HeaderComponent, PipesModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  coupons: any
  currentPage: number = 1; 
  itemsPerPage: number = 16;
  search: string = ''

  constructor(
    private couponService: CouponService
  ){}

  ngOnInit(): void {
    this.coupons = this.couponService.getCoupons();
  }

  get paginatedCoupons(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.coupons.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    return Math.ceil(this.coupons.length / this.itemsPerPage);
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.coupons.length);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
    
  onSubmit(): void {
    console.log('Form submitted');
  }
}
