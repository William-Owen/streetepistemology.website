import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PageHeader from './index'

describe('Component: Page', () => {
	it('renders correctly', () => {
		render(<PageHeader heading='Test heading' />)
		expect(screen.getByText('Test heading')).toBeInTheDocument()
	})
	it('renders correctly with section heading', () => {
		render(
			<PageHeader
				sectionHeading='Section heading'
				heading='Test heading'
			/>
		)
		expect(screen.getByRole('heading')).toHaveTextContent(
			'Section heading: Test heading'
		)
	})
	it('renders correctly with subheading', () => {
		render(
			<PageHeader heading='Test heading' subHeading='Test sub heading' />
		)
		expect(screen.getByRole('heading')).toHaveTextContent('Test heading')
		expect(screen.getByText('Test sub heading')).toBeInTheDocument()
	})
	it('renders correctly with section heading and subheading', () => {
		render(
			<PageHeader
				sectionHeading='Section heading'
				heading='Test heading'
				subHeading='Test sub heading'
			/>
		)
		expect(screen.getByRole('heading')).toHaveTextContent(
			'Section heading: Test heading'
		)
		expect(screen.getByText('Test sub heading')).toBeInTheDocument()
	})
})
