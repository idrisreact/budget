import { FC } from 'react';
import styled from 'styled-components';
import { Text } from '@/styles/utils/utils';
import { Expense } from '../interfaces';

const ExpenseItem: FC<Expense> = ({ expenses, amount }) => {
  return (
    <>
      <ExpenseItems>
        <Circles />
        <Text>{expenses}</Text>
        <p>£{amount}</p>
      </ExpenseItems>
    </>
  );
};

export default ExpenseItem;

const ExpenseItems = styled.div`
  display: flex;
  align-items: center;
  ${Text} {
    margin: 0 10px;
  }
`;

const Circles = styled.div`
  background-color: red;
  height: 5px;
  width: 5px;
  border-radius: 50%;
`;
