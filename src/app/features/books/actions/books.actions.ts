import { Action } from '@ngrx/store';

let maxId = 99;

export const BOOK_ADDED = '[book] task added';
export class AddedBook implements Action {
  readonly type = BOOK_ADDED;
  id: string;
  constructor(public title: string, public author: string, public format: string) {
    this.id = 'T' + (maxId++).toString();
  }
}

export type All =
  AddedBook;
