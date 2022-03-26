import { FC } from 'react';
import { FormData } from '../../../src/interfaces/budget';
import BudgetItem from './BudgetItem';

interface IProps {
  budgets: FormData[];
}

const BudgetItems: FC<IProps> = ({ budgets }) => {
  return (
    <div>
      {budgets.map(({ ...budgetProps }) => (
        <>
          <BudgetItem {...budgetProps} />
        </>
      ))}
    </div>
  );
};

export default BudgetItems;
