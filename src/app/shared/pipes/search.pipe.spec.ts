import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  let dataValues;
  let searchDataValues;

  beforeEach(() => {
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

  it('No search', () => {
    const pipe = new SearchPipe();
    expect(JSON.stringify(pipe.transform(dataValues, {}))).toEqual(
      JSON.stringify(dataValues)
    );
  });

  it('Search by text', () => {
    const pipe = new SearchPipe();
    expect(
      JSON.stringify(
        pipe.transform(dataValues, {
          searchColumn: 'title',
          searchText: 'Galaxy Note Lite'
        })
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
  it('Search by number', () => {
    const pipe = new SearchPipe();
    expect(
      JSON.stringify(
        pipe.transform(dataValues, {
          searchColumn: 'price',
          searchText: 210
        })
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
  it('Search by boolean', () => {
    const pipe = new SearchPipe();
    expect(
      JSON.stringify(
        pipe.transform(dataValues, {
          searchColumn: 'available',
          searchText: false
        })
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
});
