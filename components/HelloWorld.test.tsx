import { render } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('render', () => {
  const { container, getByText, getByTestId } = render(<HelloWorld />);
  expect(getByText('Hello World')).toBeInTheDocument();
  expect(getByTestId('hello')).toBeInTheDocument();
});
