import { Injectable } from '@angular/core';
import { IProduct } from '../../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  

  products: IProduct[] = [
    { id: 112412445, name: 'Laptop', quantity: 5, price: 15000, img: 'images/lap.jpg', categoryID: 1 },
    { id: 2, name: 'T-shirt', quantity: 20, price: 300, img: 'images/shirt.jpg', categoryID: 2 },
    { id: 3, name: 'Microwave', quantity: 7, price: 2500, img: 'images/micro.jpg', categoryID: 3 },
    { id: 4, name: 'Novel', quantity: 0, price: 120, img: 'images/novel.jpg', categoryID: 4 },
        { id: 4, name: 'mobile', quantity: 5, price: 120, img: 'images/download.jpg', categoryID: 1 },
                { id: 4, name: 'mobile', quantity: 5, price: 120, img: 'images/kk.jpg', categoryID:3  }


  
  ];
   getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductsByCatID(catID: number): IProduct[] {
    return this.products.filter(p => p.categoryID === catID);
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.products.find(p => p.id === prodID);
  }
}
