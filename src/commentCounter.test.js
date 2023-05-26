//  import the counter function
import { commentcounter } from './modules/popup.js';

const MOCK_DATA = [
  { comment: 'very good', creation_date: '2021-01-10', username: 'Ahmad' },
  { comment: 'yummy', creation_date: '2021-02-10', username: 'Ali' },
  { comment: 'great', creation_date: '2021-01-12', username: 'Nilab' },
  { comment: 'Mima', creation_date: '2022-01-10', username: 'Momo' },
];

const MOCK_NB_OF_ITEMS = MOCK_DATA.length;
// Mock the fetch call
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(MOCK_DATA),
}));

describe('Testing counter function', () => {
  test('The correct number of comments should be returned', async () => {
    const nbOfItems = await commentcounter();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(nbOfItems).toBe(MOCK_NB_OF_ITEMS);
  });
});