import { Component, OnInit } from '@angular/core';
import {Product} from '.../product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
	title :string = 'Component to view';
	product : Product = {
		name : "faker",
		desc : "đz",
		img : "https://znews-photo.zadn.vn/w660/Uploaded/mdf_qsklky/2019_04_03/skt_T1_faker.jpg",
		price : 100000,
		status : false
	};

  constructor() { }

  ngOnInit() {
  }
  onClickme = event => {
  	this.title = "Event Binding";
  }

}
