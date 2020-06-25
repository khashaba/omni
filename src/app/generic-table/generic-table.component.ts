import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() apiPath = null;
  @Input() localJson = null;
  @Input() showTableBorders = false;
  @Input() displayedColumns = [];
  @Input() tableWidth = null;
  @Input() paginationSizeArray: number[] = null;
  @Input() paginationSize = 25;

  receivedTableData;
  filters = ['equality', 'range'];
  applyFilters = { range: { from: '', to: '' } };
  errorMessage: string = null;
  isDeletePopupDisplayed = [];
  isFilterPopupDisplayed = [];
  totalRec: number;
  isInputFocused = false;
  page = 1;
  constructor(
    private httpClient: HttpClient,
    private utility: UtilityService
  ) {}

  ngOnInit(): void {
    this.populateTableData();
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
    this.totalRec = this.receivedTableData.length;
  }

  removecolumn(index: number) {
    this.displayedColumns.splice(index, 1);
  }
  changePaginationSize(event) {
    this.paginationSize = event;
  }
  filterToggle(i) {
    this.closePopup('delete');
    this.isFilterPopupDisplayed[i] = !this.isFilterPopupDisplayed[i];
  }
  deleteToggle(i) {
    this.closePopup('filter');
    this.isDeletePopupDisplayed[i] = !this.isDeletePopupDisplayed[i];
  }
  applyFilter(column) {
    this.closePopup('all');
    this.receivedTableData = this.utility.filter(
      this.receivedTableData,
      column,
      this.applyFilters
    );
  }
  closePopup(popupName) {
    if (popupName === 'all') {
      this.isDeletePopupDisplayed = [];
      this.isFilterPopupDisplayed = [];
    }
    if (popupName === 'delete') {
      this.isDeletePopupDisplayed = [];
    }
    if (popupName === 'filter') {
      this.isFilterPopupDisplayed = [];
    }
  }
  showInConsole() {
    console.log(this.isInputFocused);
  }
}
