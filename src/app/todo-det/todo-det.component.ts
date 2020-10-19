import { Component, OnInit, Input} from '@angular/core';
import {Todo} from '../todo';

@Component({
  selector: 'app-todo-det',
  templateUrl: './todo-det.component.html',
  styleUrls: ['./todo-det.component.css']
})
export class TodoDetComponent implements OnInit {

  @Input() todo:Todo;

  

  constructor() { }

  ngOnInit(): void {
  }

}
