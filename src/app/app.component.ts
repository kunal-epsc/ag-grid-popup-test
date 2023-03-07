import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogOneComponent } from './dialog-one/dialog-one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private readonly dialog: MatDialog) {}

  public openDialogOne() {
    this.dialog.open(DialogOneComponent, {
      width: '600px',
      height: '600px',
    });
  }
}
