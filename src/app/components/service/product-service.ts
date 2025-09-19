import { Injectable } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  

  products: IProduct[] = [
    { id: 1456545646234, name: 'Laptop', quantity: 5, price: 15000, img: 'images/lap.jpg', categoryID: 1 },
    { id: 256645645, name: 'T-shirt', quantity: 20, price: 300, img: 'images/shirt.jpg', categoryID: 2 },
        { id: 1456545646, name: 'novel', quantity: 5, price: 2000, img: 'images/novel.jpg', categoryID: 1 },

  ]; getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductsByCatID(catID: number): IProduct[] {
    return this.products.filter(p => p.categoryID === catID);
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.products.find(p => p.id === prodID);
  }
}
