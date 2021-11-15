import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-not-selected',
  template: `
    <h3 class="text-warning">Please select a event</h3>
  `
})
export class ProductNotSelectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
