import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  eventsList?: Array<Product>;

  constructor(private productService: ProductService) { 
    // throw new Error("Just for Fun");
  }

  ngOnInit(): void {
    this.eventsList = this.productService.Products;
  }
}
