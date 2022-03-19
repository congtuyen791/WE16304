import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type PRODUCT_ITEM_TYPE = {
  id: number,
  name: string,
  description: string,
  price: number
} | undefined;

type PRODUCTS_ITEM = PRODUCT_ITEM_TYPE[];

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public id :any = null;
  public showProduct :PRODUCT_ITEM_TYPE;

  constructor(public routes : ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.id = this.routes.snapshot.paramMap.get('id');

    this.showProduct = this.products
    .find(product => {
      console.log(this, product, this.id);

      return product?.id == this.id;
    });
  }

  products :PRODUCTS_ITEM = [
    {
      id: 1,
      name: 'Iphone',
      description: 'Description iphone',
      price: 1200000
    },
    {
      id: 2,
      name: 'Iphone 12 pro',
      description: 'Description iphone',
      price: 1300000
    },
    {
      id: 3,
      name: 'Iphone 13 mini',
      description: 'Description iphone',
      price: 1400000
    },
    {
      id: 4,
      name: 'Iphone 14 PRO',
      description: 'Description iphone',
      price: 1500000
    }
  ];

 
  

}
