import { AfterViewInit, Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from 'src/app/animations/fade-in.animation';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';
import { PubSubService } from '../../services/pub-sub.service';

declare var $: any;

@Component({
  selector: 'crud-root',
  templateUrl: './crud-root.component.html',
  animations: [fadeInAnimation]
})
export class CrudRootComponent implements OnInit, AfterViewInit {
  @HostBinding('@fadeInAnimation') fadeInAnimation = true;
  @HostBinding('style.display') display = 'block';

  products?: Array<Product>;
  message?: string;
  subscription?: Subscription;

  constructor(private productsService: ProductsService, private pubSubService: PubSubService, private router: Router) { }

  ngAfterViewInit(): void {
    $('body').tooltip({
      selector: '.tla'
    });
  }

  ngOnInit(): void {

    const role = sessionStorage.getItem("role");
    if (role !== "Hr") {
      this.router.navigate(['login']);      
    } else{
      this.subscription = this.pubSubService.on('products-updated').subscribe(() => this.loadProducts());
      this.loadProducts();
    }
  }

  private loadProducts() {
    this.productsService.getAllProducts().subscribe(resData => {
      this.products = resData;
      this.message = "";
    }, (err: string) => {
      this.message = err;
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe(() => {
      this.products = this.products?.filter(x => x.id !== id);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
