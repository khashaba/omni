import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
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

  it('No filter', () => {
    const pipe = new FilterPipe();
    expect(JSON.stringify(pipe.transform(dataValues, {}, {}))).toEqual(
      JSON.stringify(dataValues)
    );
  });

  it('Boolean filter', () => {
    const pipe = new FilterPipe();
    expect(
      JSON.stringify(
        pipe.transform(
          dataValues,
          { columnName: 'available' },
          { equality: false }
        )
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
  it('Range filter', () => {
    const pipe = new FilterPipe();
    expect(
      JSON.stringify(
        pipe.transform(
          dataValues,
          { columnName: 'price' },
          { range: { from: 200, to: 211 } }
        )
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
  it('Range filter only from', () => {
    const pipe = new FilterPipe();
    expect(
      JSON.stringify(
        pipe.transform(
          dataValues,
          { columnName: 'price' },
           { range: { from: 200 } }

        )
      )
    ).toEqual(JSON.stringify(dataValues));
  });
  it('Range filter only from', () => {
    const pipe = new FilterPipe();
    expect(
      JSON.stringify(
        pipe.transform(
          dataValues,
          { columnName: 'price' },
           { range: { to: 230 } }

        )
      )
    ).toEqual(JSON.stringify(searchDataValues));
  });
});
