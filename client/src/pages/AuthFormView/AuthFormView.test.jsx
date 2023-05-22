import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '.';

test('renders a message', () => {
  const { asFragment, getByText } = render(<Component />);
  expect(getByText('Component example')).toBeInTheDocument();
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="c-component"
      >
        Component example
      </div>
    </DocumentFragment>
  `);
});
