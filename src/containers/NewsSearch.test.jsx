import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import Search from '../components/search/Search';

describe('NewsSearch container', () => {
  test('renders the search and displays search results', async () => {
    render(<NewsSearch />);

    //test search input
    const setSearch = jest.fn(value => { });
    const { queryByPlaceholderText } = render(<Search setSearch={setSearch} />);
    const searchInput = queryByPlaceholderText('What do you want to know?');
    fireEvent.change(searchInput, { target: { value: 'test' } });
    expect(searchInput.value).toBe('test');

    //
    const articleList = screen.findByRole('list');

    const article = screen.findByRole('listitem');
  });
});
