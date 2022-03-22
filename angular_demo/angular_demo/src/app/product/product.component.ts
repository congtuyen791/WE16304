import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  products = [
    {
      id: 1,
      name: 'Iphone',
      description: 'Description iphone',
      price: 1200000
    }
  ]
  productFilter = this.products;
  newProduct = {
    id: 0,
    name: '',
    description: '',
    price: 0
  }

  onSubmit(data: any) {
    if (this.isedit) {
      for (let i = 0; i < this.productFilter.length; i++) {
        if (this.productFilter[i].id === this.newProduct.id) {
          this.productFilter[i] = this.newProduct;
        }
      }
      this.isedit = false;
    } else {
      console.log(data);
      data.id = this.productFilter.length + 1;
      if (data.id != this.productFilter.filter(function (product) { })) {
        this.productFilter.push(data)
        this.newProduct = {
          id: 0,
          name: '',
          description: '',
          price: 0
        }
      }
    }
    console.log(this.products);
  }
  isedit = false;
  edit(obj: any) {
    this.newProduct = obj;
    console.log(this.newProduct);
    return this.isedit = true;
  }
  remove(productId: any) {
    this.productFilter = this.productFilter.filter(function (product) {
      return product.id !== productId
    });
  }
}
