import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../product';
import {Data} from '../data';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    products : Product[];
    selectedProduct: Product;
    @Input('data') dataProduct;
    constructor(
      private productService : ProductService
    ) { }

    ngOnInit() {
      this.getProducts();
    }

    getProducts(){
      this.products = this.productService.getProducts();
    }
    

}
