import { Injectable } from '@angular/core';
import { Coupons_Data } from '../utils/data';

@Injectable({
  providedIn: 'root',
})
export class CouponService {

  constructor() {}

  getCoupons() {
    return Coupons_Data.data;
  }
}