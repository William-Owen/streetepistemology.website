import * as React from 'react'
import { render, screen } from '@testing-library/react'
import LearnPageTemplate from '.'

describe('Component: LearnPageTemplate', () => {
	it('renders', () => {
		const { container } = render(<LearnPageTemplate />)
		expect(container).toBeInTheDocument()
	})
})
