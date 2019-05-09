import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // tasks: TodoItem[] = [
  //   { id: '1', task: 'Clean Garage' },
  //   { id: '2', task: 'Fix Lightbulb' }
  // ];
  @Input() tasks: TodoItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
