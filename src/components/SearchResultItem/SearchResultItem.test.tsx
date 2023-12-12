import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchResultItem from './SearchResultItem';

describe('<SearchResultItem />', () => {
  test('it should mount', () => {
    render(<SearchResultItem />);
    
    const searchResultItem = screen.getByTestId('SearchResultItem');

    expect(searchResultItem).toBeInTheDocument();
  });
});