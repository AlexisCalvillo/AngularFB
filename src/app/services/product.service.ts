import { Injectable } from '@angular/core';
//Importación de fb
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
//AngularFireDataBase es para utilizar la conexión a fb 
//AngularFireList crea una lista
import{ Product} from '../models/product'
@Injectable()
export class ProductService {
  productList: AngularFireList<any>;
  selectedProduct: Product=new Product();

  constructor(private firebase: AngularFireDatabase) { }
  getProducts(){
    this.productList=this.firebase.list('products');
    
  }

  insertProduct(product:Product){
    this.productList.push({
      name:product.name,
      categoria:product.categoria,
      ubicacion:product.ubicacion,
      precio:product.precio
    });
  }

  uptadeProduct(product:Product){
    this.productList.update(product.$key,{
      name:product.name,
      categoria:product.categoria,
      ubicacion:product.ubicacion,
      precio:product.precio
    })

  }
  deleteProduct($key:string){
    this.productList.remove($key);
  }
}

