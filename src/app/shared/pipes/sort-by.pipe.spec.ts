import { SortByPipe } from './sort-by.pipe';

describe('SortByPipe', () => {
  let dataValues;
  let descDataValues;

  beforeEach(() => {
    dataValues = [
      {
        id: 1,
        title: 'Galaxy Note',
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
      }
    ];
    descDataValues = [
      {
        id: 3,
        title: 'Galaxy Note Lite',
        category: 'Mobile',
        price: 210,
        date: '2020-02-10',
        available: false
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
        id: 1,
        title: 'Galaxy Note',
        category: 'Mobile',
        price: 300,
        date: '2020-12-12',
        available: true
      }
    ];
  });

  it('No sorting', () => {
    const pipe = new SortByPipe();
    expect(pipe.transform(dataValues, '', 'id')).toEqual(dataValues);
  });
  it('asc sorting', () => {
    const pipe = new SortByPipe();
    expect(pipe.transform(dataValues, 'asc', 'id')).toEqual(dataValues);
    expect(pipe).toBeTruthy();
  });
  it('desc sorting', () => {
    const pipe = new SortByPipe();
    expect(pipe.transform(dataValues, 'desc', 'id')).toEqual(descDataValues);
    expect(pipe).toBeTruthy();
  });
});
