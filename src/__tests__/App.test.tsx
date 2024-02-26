// Create a mock localStorage implementation
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};

  return {
    getItem: function (key: string) {
      return store[key] || null;
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString();
    },
    removeItem: function (key: string) {
      delete store[key];
    },
    clear: function () {
      store = {};
    }
  };
})();

// Mock localStorage in the global object
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

import {test, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import App from '../App.svelte';

test('renders', () => {
  render(App);
  const appContainer = screen.getByTestId('alive');
  expect(appContainer).toBeTruthy();
});