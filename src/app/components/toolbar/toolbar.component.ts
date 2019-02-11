import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import TableModel from '../../models/TableModel';
import { ElementTypes } from '../../models/TableModel';
import * as TutorialActions from '../../actions/Table';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  addTutorial(name, url) {
    this.store.dispatch(
      new TutorialActions.AddTutorial({
        name: name,
        url: url,
        id: 1,
        description: '',
        type: ElementTypes.Task
      })
    );
  }
}
