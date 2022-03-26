import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('render', () => {
  const { container, getByText } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
});
