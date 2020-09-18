import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product';

import {ProductService} from '../../../services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public productService: ProductService) { }

  ngOnInit(): void {  
    this.productService.getProducts();
    this.resetForm();
  }
  onSubmit (productForm:NgForm){
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);
  }

  actualiza(product:NgForm){
    this.productService.uptadeProduct(product.value);
    this.resetForm(product);
  }
  resetForm(producForm?:NgForm){
    if(producForm!=null){
      producForm.reset()
      this.productService.selectedProduct=new Product();
  }
}
}
