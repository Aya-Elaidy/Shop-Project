import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { Shadow } from '../../directive/shadow';
import { TruncatePipe } from '../../pipes/truncate-pipe';
import { DatePipe,CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router'; // 👈 لازم


@Component({
  selector: 'app-productcard',
  standalone: true,
    imports: [FormsModule, CommonModule,RouterModule],

  templateUrl: './productcard.html',
  styleUrl: './productcard.css'

})
export class Productcard {

  currentDate:Date=new Date();


  @Input() prouduct?: IProduct;

@Output() Details=new EventEmitter<any>();


  showDetails() {
  if (this.prouduct) {
    this.Details.emit(this.prouduct.id); // 🔹 نبعت id بس
  }
}
  
   buyProduct(product: IProduct): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

}
