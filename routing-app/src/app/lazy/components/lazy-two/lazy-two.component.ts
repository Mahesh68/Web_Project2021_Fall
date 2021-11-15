import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-two',
  template: `
    <div class="container-fluid">
      <h2 class="text-warning" style="padding-top: 70px;">Lazy Two Component from Lazy Module Loaded...</h2>
    </div>
  `,
  styles: [
  ]
})
export class LazyTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
