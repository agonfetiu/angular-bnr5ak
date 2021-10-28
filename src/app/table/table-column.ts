export interface TableColumn {
  name: string;
  field: string;
  pipe: any;
  icon: string;
  type: ColumnType;
  component: any;
  inputs: any[];
  outputs: any[];
  class: string;
}

export enum ColumnType {
  text,
  button,
  icon,
  checkbox,
  component,
}
