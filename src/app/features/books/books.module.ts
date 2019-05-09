import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookentryComponent } from './components/bookentry/bookentry.component';
import { BookListComponent } from './components/booklist/booklist.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';

@NgModule({
  declarations: [BooksComponent, BookentryComponent, BookListComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers)
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
