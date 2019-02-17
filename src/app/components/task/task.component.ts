import { Component, OnInit, Input } from '@angular/core';
import TableModel from '../../models/TableModel';

interface DragContext {
    startPointOfMove?: number;
    type?: 'start' | 'end';
    startDate?: number;
    duration?: number;
}
@Component({
    selector: '[app-task]',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
    @Input() index: number;
    @Input() data: TableModel;

    dragContext: DragContext;

    constructor() {}

    ngOnInit() {
        this.dragContext = {};
    }

    moveStartOfTask(e) {
        this.dragContext.startPointOfMove = e.screenX;
        this.dragContext.startDate = this.data.startDate;
        this.dragContext.duration = this.data.duration;
        this.dragContext.type = 'start';
        document.addEventListener('mousemove', this.moveSelectedPointOfTask);
        document.addEventListener('mouseup', () =>
            document.removeEventListener(
                'mousemove',
                this.moveSelectedPointOfTask
            )
        );
    }

    moveSelectedPointOfTask = e => {
        if (this.dragContext.type === 'start') {
            const delta = e.screenX - this.dragContext.startPointOfMove;
            this.data.startDate = this.dragContext.startDate + delta;

            this.data.duration = this.dragContext.duration - delta * 60000;
        } else {
            const delta = this.dragContext.startPointOfMove - e.screenX;

            this.data.duration = this.dragContext.duration - delta * 60000;
        }
    };

    moveEndOfTask(e) {
        this.dragContext.startPointOfMove = e.screenX;
        this.dragContext.startDate = this.data.startDate;
        this.dragContext.duration = this.data.duration;
        this.dragContext.type = 'end';
        document.addEventListener('mousemove', this.moveSelectedPointOfTask);
        document.addEventListener('mouseup', () =>
            document.removeEventListener(
                'mousemove',
                this.moveSelectedPointOfTask
            )
        );
    }
}
