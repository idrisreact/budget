import { Heading, Text } from '@/styles/utils/utils';
import React from 'react';
import styled from 'styled-components';
import ExpenseItem from './ExpenseItem';
import { useStore } from '../../../zustand/store';

const Expenses = () => {
  const bills = [
    { expense: 'rent', amount: 300 },
    { expense: 'Food', amount: 120 },
    { expense: 'Travel', amount: 200 },
    { expense: 'internet', amount: 50 },
    { expense: 'Fun', amount: 300 },
    { expense: 'Phone bill', amount: 105 },
    { expense: 'Bank charges', amount: 14.5 },
    { expense: 'subsriptions', amount: 40 },
    { expense: 'credit card', amount: 103.07 },
    { expense: 'LISA', amount: 1000 },
  ];

  const total = bills.reduce((prev, curr) => prev + curr.amount, 0);
  const { income } = useStore();
  const remaining = income - total;
  return (
    <div>
      <Heading fontSize="16px">Expenses</Heading>
      {bills.map(({ ...bill }) => (
        <ExpenseItem {...bill} />
      ))}
      <Totals>
        <Text>Total: £{total.toFixed(2)}</Text>
        <Text>Monthly remaining:£{remaining.toFixed(2)}</Text>
      </Totals>
    </div>
  );
};

export default Expenses;

const Totals = styled.div`
  margin-top: 50px;
`;
