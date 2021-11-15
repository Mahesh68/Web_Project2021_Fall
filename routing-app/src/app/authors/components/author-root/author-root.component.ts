import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'author-root',
  templateUrl: './author-root.component.html',
  providers: [AuthorService]
})
export class AuthorRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
