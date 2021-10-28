import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
import { CellFormatterPipe } from './pipes/cell-formatter.pipe';
import { DynamicModule } from 'ng-dynamic-component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { ShowRowDirective } from './directives/show-row.directive';
import { CityDetailsComponent } from './city-details/city-details.component';
import { SanitizePipe } from './pipes/sanitize.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DynamicModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    TableComponent,
    CellFormatterPipe,
    MovieDetailsComponent,
    TableRowComponent,
    MovieDescriptionComponent,
    ShowRowDirective,
    CityDetailsComponent,
    SanitizePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
