import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<Home />)
    expect(screen.getByText('Hello via Next.js!')).toBeInTheDocument()
  })

  it('should display the template description', () => {
    render(<Home />)
    expect(screen.getByText(/production-ready Next.js template/i)).toBeInTheDocument()
  })
})
