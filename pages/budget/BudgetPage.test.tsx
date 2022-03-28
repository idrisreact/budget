import { render, act, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import BudgetPage from './index';

jest.mock('../../components/BudgetSystem/BudgetSystem', () => () => <div data-testid="budget-system" />);

describe('BudgetPage', () => {
  const Page = (
    <ThemeProvider theme={theme}>
      <BudgetPage />
    </ThemeProvider>
  );
  it('should render with theme', () => {
    const { getByTestId } = render(Page);
    expect(getByTestId('budget-page')).toBeInTheDocument();
  });

  it('should render budget system', async () => {
    const { getByTestId } = render(Page);
    await act(async () => {
      const button = getByTestId('button');
      await fireEvent.click(button);
      expect(getByTestId('budget-system')).toBeInTheDocument();
    });
  });
});
