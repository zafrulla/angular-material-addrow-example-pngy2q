import {Component} from '@angular/core';
import {VERSION} from '@angular/material';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { rowsAnimation } from './animations/template.animations';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  animations: [rowsAnimation],
})
export class AppComponent { 

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  constructor() {
    // Creates random users.
    const users: UserData[] = [];
    for (let i = 1; i <= 5; i++) { 
      users.push(this.createNewUser(i)); 
    }

    // Assign the data to the data source for the table to render.
    this.dataSource = new MatTableDataSource(users);
  }

  // Creates new user.
  createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
  }

  // Adds new user.
  addRow() {
    this.dataSource.data.push(this.createNewUser(this.dataSource.data.length + 1));
    this.dataSource.filter = "";
  }
}

/** Constants used to fill up our datasource. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

