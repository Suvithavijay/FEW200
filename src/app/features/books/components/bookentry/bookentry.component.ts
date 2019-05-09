import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { AddedBook } from '../../actions/books.actions';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() { }

  addBook(item1: HTMLInputElement, item2: HTMLInputElement, item3: HTMLInputElement) {

    const book = new AddedBook(item1.value, item2.value, item3.value);
    this.store.dispatch(book);
    item1.value = '';
    item1.focus();
  }

}
