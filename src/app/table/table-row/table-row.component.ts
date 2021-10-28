import { Component, Input } from '@angular/core';
import { ColumnType } from '../table-column';
@Component({
  selector: '[table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css', '../table.component.css'],
})
export class TableRowComponent {
  ColumnType = ColumnType;
  @Input() item: any;
  @Input() tableColumns: any[];

  onExpandToggle() {
    this.item.config.isExpanded = !this.item.config.isExpanded;
  }
}
