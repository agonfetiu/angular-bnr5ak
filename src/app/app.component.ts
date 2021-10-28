import { Component } from '@angular/core';
import { CityDetailsComponent } from './city-details/city-details.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {
  TableRow,
  TableRowChild,
  TableRowType,
} from './services/table-helper.service';
import { ColumnType, TableColumn } from './table/table-column';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  showingTable = 3;

  tableRows = [];
  tableRowsWithChildren = [];

  ngOnInit() {
    this.tableRows = this.movies.map((a) => {
      let row: TableRow = {
        data: a,
        config: {
          isExpandable: true,
          actions: { openImdb: (rowData: any) => this.onImdb(rowData) },
          component: MovieDescriptionComponent,
          type: TableRowType.customContent,
        },
      } as TableRow;
      return row;
    });

    this.tableRowsWithChildren = this.countries.map((a) => {
      let children = a.cities.map((city) => {
        let subcities = a.cities.map((c) => {
          return {
            data: c,
          } as TableRow;
        });

        return {
          data: city,
          children: subcities,
          config: {
            isExpandable: true,
            type: TableRowType.children,
            isExpanded: false,
          },
        } as TableRow;
      });

      let row: TableRow = {
        data: a,
        children,
        config: {
          isExpandable: true,
          type: TableRowType.children,
        },
      } as TableRow;
      return row;
    });

    console.log('data: ', this.tableRowsWithChildren);
  }

  onImdb(rowData) {
    window.open(rowData.imdbUrl, '_blank');
  }

  cols = [
    {
      name: 'Title',
      field: 'title',
      type: ColumnType.text,
      class: 'title',
    } as TableColumn,
    {
      name: 'Director',
      field: 'director',
      type: ColumnType.text,
    } as TableColumn,
    { name: 'Rating', field: 'rating', type: ColumnType.text } as TableColumn,
    {
      name: 'Details',
      type: ColumnType.component,
      component: MovieDetailsComponent,
    } as TableColumn,
  ] as any[];

  cols2 = [
    {
      name: 'Name',
      field: 'name',
      type: ColumnType.text,
    } as TableColumn,
    {
      name: 'Population (M)',
      field: 'population',
      type: ColumnType.text,
    } as TableColumn,
    {
      name: 'Area (km2)',
      field: 'area',
      type: ColumnType.text,
    } as TableColumn,
  ] as any[];

  cols3 = [
    {
      name: 'Name',
      field: 'name',
      type: ColumnType.text,
    } as TableColumn,
    {
      name: 'Type',
      field: 'type',
      type: ColumnType.text,
    } as TableColumn,
  ] as any[];

  countries = [
    {
      id: 1,
      name: 'United States',
      area: '9,826,675',
      population: '329.5',
      cities: [
        {
          id: 11,
          name: 'New York',
          area: '778',
          population: '8.8',
        } as Country,
        {
          id: 11,
          name: 'Los Angeles',
          area: '1,216',
          population: '3.9',
        } as Country,
      ],
    } as Country,
    {
      id: 2,
      name: 'Brazil',
      area: '8,514,877',
      population: '212.6',
      cities: [
        {
          id: 11,
          name: 'New York',
          area: '778',
          population: '8.8',
        } as Country,
        {
          id: 11,
          name: 'Los Angeles',
          area: '1,216',
          population: '3.9',
        } as Country,
      ],
    } as Country,
    {
      id: 3,
      name: 'Australia',
      area: '7,741,220',
      population: '25.69',
      cities: [
        {
          id: 11,
          name: 'New York',
          area: '778',
          population: '8.8',
        } as Country,
        {
          id: 11,
          name: 'Los Angeles',
          area: '1,216',
          population: '3.9',
        } as Country,
      ],
    } as Country,
    {
      id: 4,
      name: 'Russia',
      area: '17,098,242',
      population: '144.1',
      cities: [
        {
          id: 11,
          name: 'New York',
          area: '778',
          population: '8.8',
        } as Country,
        {
          id: 11,
          name: 'Los Angeles',
          area: '1,216',
          population: '3.9',
        } as Country,
      ],
    } as Country,
  ] as Country[];

  movies = [
    {
      id: 1,
      title: 'The Lord of the Rings: The Return of the King',
      director: 'Peter Jackson',
      rating: 8.9,
      genres: ['Action', 'Adventure', 'Drama'],
      imdbUrl: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_srsg_3',
      description: `Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.`,
      imageUrl:
        'https://www.limitedruns.com/media/images/productimage-picture-lord-of-the-rings-the-return-of-the-king-1-72793.jpg',
    },
    {
      id: 2,
      title: 'The Good, the Bad and the Ugly',
      director: 'Sergio Leone',
      rating: 8.8,
      genres: ['Western'],
      description: `A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.`,
      imdbUrl: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_srsg_3',
      imageUrl:
        'https://i.scdn.co/image/ab67616d0000b273c3c0ca7a4929d96f2f1c5774',
    },
    {
      id: 3,
      title: "One Flew Over the Cuckoo's Nest",
      director: 'Milos Forman',
      rating: 8.7,
      genres: ['Drama'],
      description: `A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.`,
      imdbUrl: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_srsg_3',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg',
    },
    {
      id: 4,
      title: 'The Silence of the Lambs',
      director: 'Jonathan Demme',
      rating: 8.6,
      genres: ['Crime', 'Drama', 'Thriller'],
      description: `A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.`,
      imdbUrl: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_srsg_3',
      imageUrl:
        'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    },
  ] as Movie[];

  tree = [
    {
      data: { name: 'Earth', type: 'Planet' },
      config: { isExpandable: true, type: TableRowType.children },
      children: [
        {
          data: { name: 'Europe', type: 'Continent' },
          config: { isExpandable: true, type: TableRowType.children },
          children: [
            {
              data: { name: 'Germany', type: 'Country' },
              config: { isExpandable: true, type: TableRowType.children },
              children: [
                {
                  data: {
                    name: 'Berlin',
                    type: 'City',
                    description: `Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963. `,
                    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.4201323351!2d13.14455454370644!3d52.50651327269696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2s!4v1634421752391!5m2!1sen!2s`,
                  },
                  config: {
                    isExpandable: true,
                    hasCustomContent: true,
                    type: TableRowType.customContent,
                    component: CityDetailsComponent,
                  },
                },
              ] as TableRow[],
            },
            {
              data: { name: 'Kosovo', type: 'Country' },
              config: { isExpandable: true, type: TableRowType.children },
              children: [
                {
                  data: {
                    name: 'Prishtina',
                    type: 'City',
                    description: `Pristina is the capital of Kosovo and seat of the eponymous municipality and district. It is predominantly populated by Albanian-speaking peoples, constituting the second-largest capital city in Europe, after Tirana. During the Paleolithic Age, what is now the area of Pristina was involved by the Vinča culture.`,
                    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93880.44424105847!2d21.088687439189144!3d42.66635876633168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549ee605110927%3A0x9365bfdf385eb95a!2sPristina!5e0!3m2!1sen!2s!4v1634423821569!5m2!1sen!2s',
                  },
                  config: {
                    isExpandable: true,
                    hasCustomContent: true,
                    type: TableRowType.customContent,
                    component: CityDetailsComponent,
                  },
                },
              ] as TableRow[],
            },
          ] as TableRow[],
        },
        // {
        //   data: { name: 'North America', type: 'Continent' },
        //   config: { isExpandable: true },
        // },
        // {
        //   data: { name: 'Africa', type: 'Continent' },
        //   config: { isExpandable: true },
        // },
      ] as TableRow[],
    },
  ] as TableRow[];
}

export interface Movie {
  id: number;
  title: string;
  director: string;
  rating: number;
  genres: string[];
  imageUrl: string;
  imdbUrl: string;
  description: string;
}

export interface Country {
  id: number;
  name: string;
  population: string;
  area: string;
  cities: Country[];
}
