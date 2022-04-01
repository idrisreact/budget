import { FC } from 'react';
import styled from 'styled-components';
import { Text } from '@/styles/utils/utils';

interface IProps {
  expense: string;
  amount: number;
}

const ExpenseItem: FC<IProps> = ({ expense, amount }) => {
  return (
    <>
      <ExpenseItems>
        <Circles />
        <Text>{expense}</Text>
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
