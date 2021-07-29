import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
