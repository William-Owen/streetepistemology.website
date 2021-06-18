import * as React from 'react'
import { render, screen } from '@testing-library/react'
import CourseModuleCount from './index'

describe('Component: CourseModuleCount', () => {
	it('renders correctly', () => {
		render(<CourseModuleCount moduleCount={3} />)
	})
	it('renders correctly', () => {
		const { container } = render(<CourseModuleCount moduleCount={3} />)
		expect(container).toHaveTextContent('3 Modules')
	})
})
