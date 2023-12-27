import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchInput from './UploadFile';

describe('<SearchInput />', () => {
  test('it should mount', () => {
    render(<SearchInput />);
    
    const searchInput = screen.getByTestId('SearchInput');

    expect(searchInput).toBeInTheDocument();
  });
});