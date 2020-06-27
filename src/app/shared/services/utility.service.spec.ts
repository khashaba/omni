import { TestBed } from '@angular/core/testing';

import { UtilityService } from './utility.service';

describe('UtilityService', () => {
  let service: UtilityService;
  let dataValues;
  let searchDataValues;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityService);

    dataValues = [
      {
        id: 1,
        title: 'Google pixle',
        category: 'Mobile',
        price: 300,
        date: '2020-12-12',
        available: true
      },
      {
        id: 2,
        title: 'Iphone x',
        category: 'Mobile',
        price: 320,
        date: '2020-02-29',
        available: true
      },
      {
        id: 3,
        title: 'Galaxy Note Lite',
        category: 'Mobile',
        price: 210,
        date: '2020-02-10',
        available: false
      },
      {
        id: 4,
        title: 'Galaxy Note Lite',
        category: 'Mobile',
        price: 210,
        date: '2020-02-10',
        available: false
      }
    ];

    searchDataValues = [
      {
        id: 3,
        title: 'Galaxy Note Lite',
        category: 'Mobile',
        price: 210,
        date: '2020-02-10',
        available: false
      },
      {
        id: 4,
        title: 'Galaxy Note Lite',
        category: 'Mobile',
        price: 210,
        date: '2020-02-10',
        available: false
      }
    ];
  });

  it('filter with boolean', () => {
    expect(
      JSON.stringify(
        service.filter(
          dataValues,
          { columnName: 'available' },
          { equality: false }
        )
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
});
