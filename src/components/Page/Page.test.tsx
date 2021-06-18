import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Page from '.'

describe('Component: Page', () => {
	it('renders correctly', () => {
		const { container } = render(<Page />)
		expect(container).toBeInTheDocument()
	})
	it('renders correctly with children', () => {
		render(
			<Page>
				<h1>Test heading</h1>
			</Page>
		)
		expect(screen.getByRole('heading')).toHaveTextContent('Test heading')
	})
})
