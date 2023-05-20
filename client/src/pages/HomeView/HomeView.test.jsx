import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '.';

test('renders a message', () => {
  const { screen } = render(<Component />);
  expect(screen.getByText('Component example')).toBeInTheDocument();
  expect(screen.asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="c-component"
      >
        Component example
      </div>
    </DocumentFragment>
  `);
});
