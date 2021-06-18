import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from '.'

describe('Component: Layout', () => {
	it('renders correctly with children', () => {
		render(
			<Layout>
				<h1 data-testid='test-heading'>Test heading</h1>
			</Layout>
		)
		expect(screen.getByTestId('test-heading')).toBeInTheDocument()
	})
})
