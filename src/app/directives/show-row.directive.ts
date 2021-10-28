import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  ViewContainerRef,
} from '@angular/core';
import { TableRow, TableRowType } from '../services/table-helper.service';

@Directive({
  selector: '[showRow]',
})
export class ShowRowDirective implements OnChanges {
  @Input()
  showRow: TableRow;
  constructor(private el: ElementRef) {}

  ngOnChanges(changes) {
    const config = this.showRow.config;
    if (!config.isExpanded || config.type !== TableRowType.children) {
      this.el.nativeElement.remove();
      console.log('sdas');
    }
  }
}
