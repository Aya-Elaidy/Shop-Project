import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { RouterModule } from '@angular/router';
import { Shadow } from '../../directive/shadow';
@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule,Shadow],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css'
})
export class Productcard {
  @Input() product!: IProduct;   
  currentDate: Date = new Date();

 buyProduct(): void {
  if (this.product && this.product.stock > 0) {
    this.product.stock--;
  }
}

}
