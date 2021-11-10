import App from './App';
import React, {useState} from 'react';
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello whirled!/i);
  expect(linkElement).toBeInTheDocument();
});
