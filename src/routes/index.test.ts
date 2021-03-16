import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/svelte'

import Index from './index.svelte'

describe('index', () => {
	it('shows proper heading when rendered', () => {
		const { getByText } = render(Index)

		expect(getByText('Hello, World!')).toBeInTheDocument()
	})
})
