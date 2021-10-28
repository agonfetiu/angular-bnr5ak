import { Component, Input, OnInit } from '@angular/core';
import { TableRow } from '../services/table-helper.service';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css'],
})
export class MovieDescriptionComponent {
  @Input() input: TableRow;
}
