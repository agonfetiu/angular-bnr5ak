import { Component, Injector, Input } from '@angular/core';
import { TableRow, TableRowType } from '../services/table-helper.service';
import { ColumnType, TableColumn } from './table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  TableRowType = TableRowType;
  ColumnType = ColumnType;
  public displayedColumns: string[];
  @Input() tableColumns: TableColumn[] = [];
  @Input() data: TableRow[] = [];
}
