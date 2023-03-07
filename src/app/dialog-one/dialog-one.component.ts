import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  GetContextMenuItemsParams,
  GridOptions,
  GridReadyEvent,
  MenuItemDef,
} from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DialogTwoComponent } from '../dialog-two/dialog-two.component';

@Component({
  selector: 'dialog-one',
  templateUrl: './dialog-one.component.html',
  styleUrls: ['./dialog-one.component.css'],
})
export class DialogOneComponent {
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
  }

  openDialogTwo() {
    this.dialog.open(DialogTwoComponent, {
      width: '500px',
      height: '300px',
    });
  }
}
