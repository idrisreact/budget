import { Heading, Text } from '@/styles/utils/utils';
import React from 'react';
import styled from 'styled-components';

import ExpenseItem from './ExpenseItem';

import { useBudget } from 'hooks/useBudget';

const Expenses = () => {
  const { data, error } = useBudget();

  if (error) {
    return <p>error loading data</p>;
  }

  return (
    <div>
      <Heading fontSize="16px">Expenses</Heading>
      {data?.data &&
        data?.data?.expenses?.map((expense) => (
          <ExpenseItem
            key={`${expense.amount}${expense.expenses}`}
            expenses={expense.expenses}
            amount={expense.amount}
          />
        ))}

      <Totals>
        <Text>Total: £{data?.total_outgoings.toFixed(2)}</Text>
        <Text>Number of Expenses: {data?.entries}</Text>

        {/* <Text>Monthly remaining:£{remaining.toFixed(2)}</Text> */}
      </Totals>
    </div>
  );
};

export default Expenses;

const Totals = styled.div`
  margin-top: 50px;
`;
