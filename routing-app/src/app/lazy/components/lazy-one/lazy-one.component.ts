import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-one',
  template: `
  <div class="container-fluid">
    <h2 class="text-success" style="padding-top: 70px;">Lazy One Component from Lazy Module Loaded...</h2>
  </div>
  `
})
export class LazyOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
