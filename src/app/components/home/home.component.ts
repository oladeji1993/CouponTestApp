import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Coupon {
  discount: number;
  title: string;
  description: string;
  validUntil: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgStyle,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  coupons: Coupon[] = Array(20)
    .fill(null)
    .map((_, index) => ({
      discount: 20,
      title: 'Special Discount',
      validUntil: '2024-12-31',
      description: `Get 20% off on your order ${index + 1}`,
    }));

    currentPage: number = 1; // Current page number
  itemsPerPage: number = 16; // Number of items per page

  // Get the coupons for the current page
  get paginatedCoupons(): Coupon[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.coupons.slice(startIndex, startIndex + this.itemsPerPage);
  }

  // Calculate total number of pages
  get totalPages(): number {
    return Math.ceil(this.coupons.length / this.itemsPerPage);
  }

  // Method to calculate the end index for display
  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.coupons.length);
  }

  constructor() {}

  ngOnInit(): void {}

  // Navigate to the next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  // Navigate to the previous page
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
    
  onSubmit(): void {
    // Handle form submission
    console.log('Form submitted');
  }



  min: number = 0;
  max: number = 1000;
  minPrice: number = 100;
  maxPrice: number = 900;
  minPercent: number = 10;
  maxPercent: number = 90;

  updateRange() {
    // Prevent overlap
    if (this.minPrice > this.maxPrice - 50) {
      this.minPrice = this.maxPrice - 50;
    }
    if (this.maxPrice < this.minPrice + 50) {
      this.maxPrice = this.minPrice + 50;
    }
    // Calculate percentage for dynamic track
    this.minPercent = ((this.minPrice - this.min) / (this.max - this.min)) * 100;
    this.maxPercent = ((this.maxPrice - this.min) / (this.max - this.min)) * 100;
  }
}
