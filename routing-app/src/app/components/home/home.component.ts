import { Component, HostBinding, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/fade-in.animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  // animations: [fadeInAnimation]
})
export class HomeComponent implements OnInit {
  // @HostBinding('@fadeInAnimation') fadeInAnimation = true;
  // @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit(): void {
  }

}
