import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import TableModel from '../../models/TableModel';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent implements OnInit {
  rows: Observable<TableModel[]>;

  constructor(private store: Store<AppState>) {
    this.rows = store.select('tutorial');
  }

  ngOnInit() {}
}
