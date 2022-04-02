import useSwr, { Key } from 'swr';
import { UserInformation } from '../components/BudgetForm/interfaces';

interface ExpenseDataResponse {
  data: UserInformation;
  entries: number;
  total_outgoings: number;
}

export const key: Key = '/budgets';

export const useBudget = () => {
  const fetcher = async (...key: Key[]) => {
    const response = await fetch(`http://localhost:8000${[...key]}`);
    return await response.json();
  };
  const { data, error } = useSwr<ExpenseDataResponse>(key, fetcher);

  return { data, error };
};
