import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import Search from '../components/search/Search';

describe('NewsSearch container', () => {
  test('renders the search and displays search results', async () => {
    render(<NewsSearch />);

    //test loader
    screen.getByText('Loading...');

    //test search input
    const mockSearch = jest.fn();
    const { queryByPlaceholderText } = render(<Search mockSearch={mockSearch}/>);
    const searchInput = queryByPlaceholderText('What do you want to know?');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    return waitFor(async () => {
    //test ArticleList
      const ul = await screen.findByRole('list');
      expect(ul).not.toBeEmptyDOMElement();
    }, 6000);
  });
});
