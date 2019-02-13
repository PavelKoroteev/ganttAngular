import { Component, OnInit, Input } from "@angular/core";
import TableModel from '../../models/TableModel';

@Component({
  selector: "[app-task]",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() index: number;
  @Input() data: TableModel;

  constructor() {}

  ngOnInit() {}
}
