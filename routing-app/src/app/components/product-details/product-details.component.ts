import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from "rxjs/operators";

import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-details',
  template: `
    <h3 class="text-warning">Event Details</h3>
    <div *ngIf="product else elseBlock">
      <h3>{{product!.name}}</h3>
      <p>{{product!.description}}</p>
      <hr>
      <h4>{{product!.status}}</h4>
    </div>
    <ng-template #elseBlock>
      <h3 class="text-danger">Product not Found..</h3>
    </ng-template>
  `
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product?: Product;
  rSub?: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.rSub = this.route.params.pipe(map(param => param['id'])).subscribe(id => {
      this.product = this.productService.Products.find(p => p.id === parseInt(id));
    });
  }

  ngOnDestroy(): void {
    console.log("ProductDetailsComponent Destroyed");
    this.rSub?.unsubscribe();
  }
}
