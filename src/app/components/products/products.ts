import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { Shadow } from '../../directive/shadow';
import { TruncatePipe } from '../../pipes/truncate-pipe';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule,Shadow,TruncatePipe],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  currentDate: Date = new Date();


  searchT: string = '';
  selectedCategoryId: number = 0; 

  categories: ICategory[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothes' },
  ];

  productList: IProduct[] = [
    { id: 1445456656, name: 'Laptop', quantity: 5, price: 15000, img: 'images/lap.jpg', categoryID: 1 },
    { id: 244556, name: 'T-shirt', quantity: 20, price: 300, img: 'images/shirt.jpg', categoryID: 2 },
    { id: 3, name: 'Microwave', quantity: 7, price: 2500, img: 'images/micro.jpg', categoryID: 3 },
    { id: 4, name: 'Novel', quantity: 0, price: 120, img: 'images/novel.jpg', categoryID: 4 }
  ];
  
get filteredProductsList(): IProduct[] {
  let selectedId = Number(this.selectedCategoryId); 
  return this.productList.filter(product =>
    product.name.toLowerCase().includes(this.searchT.toLowerCase()) &&
    (selectedId === 0 || product.categoryID === selectedId)
  );
}



  getCategoryName(id: number): string {
     for (let i = 0; i < this.categories.length; i++) {
       if (this.categories[i].id === id) { return this.categories[i].name; } }
        return 'Unknown'; }

 
   buyProduct(product: IProduct): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
  }

  showDetails(product: IProduct): void {
    
  }

}
