import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Plural from './index'

describe('Component: PageNavigation', () => {
	it('renders singular correctly', () => {
		const { container } = render(<Plural text='test' num={1} />)
		expect(screen.getByText('test')).toBeInTheDocument
	})
	it('renders plural correctly', () => {
		render(<Plural text='test' num={2} />)
		expect(screen.getByText('tests')).toBeInTheDocument
	})
	it('renders singular with alt singular suffix correctly', () => {
		render(<Plural text='test' num={1} singularSuffix='X' />)
		expect(screen.getByText('testX')).toBeInTheDocument
	})

	it('renders plural with alt plural suffix correctly', () => {
		render(<Plural text='test' num={2} pluralSuffix='X' />)
		expect(screen.getByText('testX')).toBeInTheDocument
	})

	it('renders singular with alt singular and plural suffix correctly', () => {
		render(
			<Plural text='test' num={1} singularSuffix='X' pluralSuffix='Y' />
		)
		expect(screen.getByText('testX')).toBeInTheDocument
	})

	it('renders plural with alt singular and plural suffix correctly', () => {
		render(
			<Plural text='test' num={2} singularSuffix='X' pluralSuffix='Y' />
		)
		expect(screen.getByText('testY')).toBeInTheDocument
	})
})
