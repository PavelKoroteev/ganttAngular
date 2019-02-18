import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import TableModel from "../../models/TableModel";
import { AppState } from "../../app.state";
import { ElementTypesData } from "../../models/TableModel";

@Component({
    selector: "app-table",
    templateUrl: "./table.component.html",
    styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
    dataSource: Observable<TableModel[]>;

    elemenTypes = ElementTypesData;

    constructor(private store: Store<AppState>) {
        this.dataSource = store.select("tutorial");
    }

    ngOnInit() {}

    displayedColumns: string[] = [
        "title",
        "assignee",
        "type",
        "startDate",
        "duration"
    ];
}
