import * as React from 'react'
import { render, screen } from '@testing-library/react'
import navigationLearn from '.'

describe('Component: navigationLearn', () => {
	it('renders', () => {
		const { container } = render(<navigationLearn />)
		expect(container).toBeInTheDocument()
	})
})
