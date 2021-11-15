import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorQuoteComponent } from './components/author-quote/author-quote.component';
import { AuthorRootComponent } from './components/author-root/author-root.component';

@NgModule({
  declarations: [
    AuthorListComponent,
    AuthorQuoteComponent,
    AuthorRootComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuthorRootComponent
  ]
})
export class AuthorsModule { }
