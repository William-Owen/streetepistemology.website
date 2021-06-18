import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PageNavigation from './index'

describe('Component: PageNavigation', () => {
	it('renders correctly', () => {
		render(<PageNavigation />)
		expect(screen.getByRole('navigation')).toBeInTheDocument
	})
	it('renders with children', () => {
		render(
			<PageNavigation>
				<div data-testid='testDiv' />
			</PageNavigation>
		)
		expect(screen.getByRole('navigation')).toBeInTheDocument
		expect(screen.getByTestId('testDiv')).toBeInTheDocument
	})
})
