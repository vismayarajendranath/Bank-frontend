import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  productDetails:any
  search:any

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getproduct()
    .subscribe((result:any)=>{
      this.productDetails=result.products
      console.log(this.productDetails);
      
    })
    this.api.searchTerm.subscribe((data)=>{
      this.search= data
    })
  }

}