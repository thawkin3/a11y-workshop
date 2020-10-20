import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the app without throwing an error', () => {
    expect(() => render(<App />)).not.toThrow()
  })
})
