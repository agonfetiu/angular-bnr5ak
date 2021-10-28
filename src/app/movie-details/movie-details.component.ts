import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../app.component';
import { TableRow } from '../services/table-helper.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  @Input() input: TableRow;
  data: Movie;
  actions: any;

  ngOnInit() {
    this.data = this.input.data;
    this.actions = this.input.config.actions;
  }
}
