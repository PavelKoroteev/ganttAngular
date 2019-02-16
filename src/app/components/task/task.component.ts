import { Component, OnInit, Input } from "@angular/core";
import TableModel from "../../models/TableModel";
interface DragContext {
  startPointOfMove: number;
  type: "start" | "end";
}
@Component({
  selector: "[app-task]",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() index: number;
  @Input() data: TableModel;

  dragContext: DragContext;

  constructor() {}

  ngOnInit() {}

  moveStartOfTask(e) {
    this.dragContext.startPointOfMove = e.screenX;
    this.dragContext.type = "start";
    document.addEventListener("move", event => this.moveSelectedPointOfTask(e));
    console.log(e);
  }

  moveSelectedPointOfTask(e) {
    this.data.startDate =
      this.data.startDate + (this.dragContext.startPointOfMove - e.screenX);
    console.log(e);
  }

  moveEndOfTask(e) {
    this.dragContext.startPointOfMove = e.screenX;
    this.dragContext.type = "end";
    console.log(e);
  }
}
