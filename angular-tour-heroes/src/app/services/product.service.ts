import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = Data;
  productService: any;
  constructor() { }

  getProducts():Product[]{
  	return this.products;
  }
  addProduct(product){  
    const newProduct = {id: this.products.length + 1, ...product};
    return this.products.push(newProduct);
  }
}
