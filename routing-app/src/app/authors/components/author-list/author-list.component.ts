import { Component, OnInit } from '@angular/core';
import { Author } from '../../models/app.author';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  list?: Array<Author>;
  selectedAuthor?: Author;

  constructor(private _aService: AuthorService) { }

  ngOnInit() {
    this.list = this._aService.Authors;
  }

  selectAuthor(a: Author) {
    this._aService.SelectedAuthor = a;
    this.selectedAuthor = this._aService.SelectedAuthor;
  }

  isSelected(a: Author) {
    return this.selectedAuthor === a;
  }
}
