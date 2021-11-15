import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.css' ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Counter

    $('.counter-stat').counterUp({
      delay: 10,
      time: 1000,
    });
  }

}
