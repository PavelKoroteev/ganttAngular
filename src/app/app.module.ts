import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatFormFieldModule,
  MatTableModule,
  MatInputModule
} from "@angular/material";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { ContentComponent } from "./content/content.component";
import { TableComponent } from "./components/table/table.component";
import { GanttComponent } from "./components/gantt/gantt.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/TableReducer";
import { TaskComponent } from "./components/task/task.component";
import { SubtaskComponent } from "./components/subtask/subtask.component";
import { SectionComponent } from "./components/section/section.component";
import { MilestoneComponent } from "./components/milestone/milestone.component";
import { TimelineComponent } from "./components/timeline/timeline.component";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    TableComponent,
    GanttComponent,
    TaskComponent,
    SubtaskComponent,
    SectionComponent,
    MilestoneComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
