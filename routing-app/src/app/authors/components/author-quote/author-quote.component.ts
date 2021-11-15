import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Author } from '../../models/app.author';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'author-quote',
  templateUrl: './author-quote.component.html',
  styleUrls: ['./author-quote.component.css']
})
export class AuthorQuoteComponent implements OnInit, OnDestroy {
  selectedAuthor?: Author;
  sac_sub?: Subscription;

  constructor(private _aService: AuthorService) { }
  
  ngOnInit(): void {
    this.sac_sub = this._aService.SelectedAuthorChanged.subscribe(() => {
      this.selectedAuthor = this._aService.SelectedAuthor;
    });
  }

  ngOnDestroy(): void {
    this.sac_sub?.unsubscribe();
  }
}
