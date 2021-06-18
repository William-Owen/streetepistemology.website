import * as React from 'react'
import { render, screen } from '@testing-library/react'
import Video from '.'

describe('Component: Video', () => {
	it('renders correctly', () => {
		const { container } = render(<Video videoID='123' />)
		expect(container).toBeInTheDocument()
	})
	it('renders with the iframe having the correct url', () => {
		render(<Video videoID='123' />)
		expect(screen.getByTestId('iframe')).toHaveAttribute(
			'src',
			'https://www.youtube-nocookie.com/embed/123?controls=1'
		)
	})
})
