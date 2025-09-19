import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Productcard } from '../productcard/productcard';
import { ProductService } from '../service/product-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productparent',
  standalone: true,
  imports: [Productcard, FormsModule],  
  templateUrl: './productparent.html',
  styleUrl: './productparent.css'
})
export class Productparent implements OnInit {
  products: IProduct[] = [];
  searchText: string = '';  

  constructor(private productsService: ProductService) {}

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.products = this.productsService.getAllProducts();
  }
}
