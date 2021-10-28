import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class TableHelper {
  // generateTableRow(): TableRow<any> {
  //   return {
  //     data: {},
  //     actions: [],
  //     config: {} as TableRowConfig,
  //   } as TableRow<any>;
  // }
}

export class TableRow {
  data: any;
  config: TableRowConfig;
  children: TableRow[];
  level: number;
}

export class TableRowConfig {
  isExpandable = false;
  isExpanded = false;
  hasCustomContent = false;
  component: any;
  type: TableRowType = TableRowType.simple;
  actions: any;
}

export class TableRowChild {
  childFieldName: string;
  childData: any;
  childRow: TableRow;
}

export enum TableRowType {
  simple,
  children,
  customContent,
}
