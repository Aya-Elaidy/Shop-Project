import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product-service';
import { IProduct } from '../../models/iproduct';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css'],
  imports:[RouterModule]
})
export class ProductDetails implements OnInit {
  product?: IProduct;

 constructor(
  private route: ActivatedRoute,
  private productService: ProductService
) {}

ngOnInit(): void {
  const idStr = this.route.snapshot.paramMap.get('id');
  const id = idStr ? Number(idStr) : NaN;

  if (!isNaN(id)) {
    this.product = this.productService.getProductByID(id);
  }
}

}
