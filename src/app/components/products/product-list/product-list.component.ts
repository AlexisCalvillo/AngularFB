import { Component, OnInit } from '@angular/core';
import { snapshotChanges } from 'angularfire2/database';
import { Product } from 'src/app/models/product';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
//Conexión con el servicio

import {ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  constructor(private productService:ProductService) { }

  ngOnInit (): void {
    this.productService.getProducts();
    this.productService.productList.snapshotChanges().subscribe(item=>{
      this.productList=[];
      item.forEach(element=>{
        let x =element.payload.toJSON();
        x['$key']=element.key;
        this.productList.push(x as Product);
      });
    });
  }
  enlaza(product:Product){
    this.productService.selectedProduct=Object.assign({},product);
  }
  eliminar(key:string){
    this.productService.deleteProduct(key);

  }

}
