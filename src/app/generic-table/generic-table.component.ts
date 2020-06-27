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
  @Input() searchableTypes = [];
  @Input() sortTypes = ['', 'asc', 'desc'];

  receivedTableData;
  filters = ['equality', 'range'];
  applyFilters = {};
  otherFilters = {}
  rangeFrom = [];
  rangeTo = [];
  filterColumn: '';
  errorMessage: string = null;
  isDeletePopupDisplayed = [];
  isFilterPopupDisplayed = [];
  sortColumn = '';
  sortIndex = 0;
  totalRec: number;
  isInputFocused = false;
  searchText = [];
  searchColumn = '';

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
    this.closePopup('all');
    this.isFilterPopupDisplayed[i] = !this.isFilterPopupDisplayed[i];
  }
  deleteToggle(i) {
    this.closePopup('all');
    this.isDeletePopupDisplayed[i] = !this.isDeletePopupDisplayed[i];
  }
  sortToggle(columnName: string) {
    this.closePopup('all');
    if (this.sortColumn === columnName) {
      if (this.sortIndex < this.sortTypes.length - 1) {
        this.sortIndex++;
      } else {
        this.sortIndex = 0;
      }
    } else {
      this.sortColumn = columnName;
      this.sortIndex++;
    }
  }
  applyFilter(column, columnNumber) {
    this.filterColumn = column;
    this.applyFilters = {};
    
    this.closePopup('all');
    if (this.rangeFrom[columnNumber] || this.rangeTo[columnNumber]) {
      let from = {};
      let to = {};

      if (this.rangeFrom[columnNumber]) {
        from = { from: this.rangeFrom[columnNumber] };
        this.rangeFrom = [];
      }
      if (this.rangeTo[columnNumber]) {
        to = { to: this.rangeTo[columnNumber] };
        this.rangeTo = [];
      }
      this.applyFilters['range'] = { ...from, ...to };
    }
    else{

      this.applyFilters = {...this.otherFilters};
    }
    console.log('aplly fitlers');
    console.log(this.applyFilters);
    console.log('filter columne');

    console.log(this.filterColumn);
    console.log('nehayto');
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
  onSearchFocus(column: string) {
    this.searchColumn = '';
    this.searchColumn = column;
    this.isInputFocused = true;
  }
  onSearchBlur() {
    this.isInputFocused = false;
  }
  showInConsole() {
    console.log(this.searchText);
  }
}
