import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent implements OnInit {
  @Input() apiPath = null;
  @Input() localJson = null;
  @Input() showTableBorders = false;
  @Input() displayedColumns = [];
  @Input() tableWidth = null;
  receivedTableData;
  errorMessage: string = null;
  showIcon = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.populateTableData();
  }
  showInConsole() {
    console.log(this.tableWidth);
  }
  getColoumsNames() {
    return this.displayedColumns.map((column) => column.columnName);
  }
  populateTableData() {
    // To make sure only one method is selected
    if (this.apiPath && this.localJson) {
      this.errorMessage = 'Error: you have to identify only one data source';
    }
    // to fetch the table data from api
    else if (this.apiPath) {
      this.httpClient.get(this.apiPath).subscribe((receivedData) => {
        this.receivedTableData = receivedData;
      });
    }
    // to fetch the table data from local Json file
    else if (this.localJson) {
      this.receivedTableData = this.localJson;
    } else {
      this.errorMessage = 'Error: You have to identify data source';
    }
  }
  showCloseIcon() {
    this.showIcon = !this.showIcon;
  }
  removecolumn(index: number) {
    this.displayedColumns.splice(index, 1);
  }
}
