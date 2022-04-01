import styled from 'styled-components';
import Expenses from './Expenses/Expenses';
import Income from './Income';

const BudgetForm = () => {
  return (
    <ExpenseFormWrapper>
      <Income />
      <div className="expenses">
        <Expenses />
      </div>
    </ExpenseFormWrapper>
  );
};

export default BudgetForm;

const ExpenseFormWrapper = styled.div`
  .expenses {
    margin-top: 50px;
  }
`;
