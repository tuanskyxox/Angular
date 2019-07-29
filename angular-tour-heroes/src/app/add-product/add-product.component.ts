import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output('keyAddress') onHandleAddress = new EventEmitter<string>();
  product : Product = new Product();
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productService.addProduct(this.product);
  }

}
