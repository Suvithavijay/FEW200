import { Component, OnInit, Input } from '@angular/core';
import { BookItem } from '../../models';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books: BookItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
