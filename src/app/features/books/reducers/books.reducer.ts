import * as actions from '../actions/books.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface State extends EntityState<BookEntity> {

}

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1', title: 'Hamlet', author: 'Shakespeare', format: 'Paperback'
    },
    2: {
      id: '2', title: 'Pride and Prejudice', author: 'Austen', format: 'Hardcover'
    },
    3: {
      id: '3', title: 'A Tale of 2 cities', author: 'Dickens', format: 'Hardcover'
    }
  }
};

export const adapters = createEntityAdapter<BookEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {

    case actions.BOOK_ADDED: {
      const bookToAdd: BookEntity = { id: action.id, title: action.title, author: action.author, format: action.format };
      return adapters.addOne(bookToAdd, state);
    }
    default: {
      return state;
    }
  }
}
