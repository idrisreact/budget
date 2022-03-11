import { FC } from "react";
import styled from "styled-components";
import { FormData } from "../../../interfaces/budget";

const BudgetItem: FC<FormData> = ({ expense, amount }) => {
  const capitalized = (expenseString: string) => {
    const first = expenseString[0].toUpperCase().concat(expenseString.slice(1));
    return first;
  };
  return (
    <Expense>
      <p>{capitalized(expense)}</p>
      <p>{amount}</p>
    </Expense>
  );
};

export default BudgetItem;

const Expense = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-top: 1px solid black; */
  border-bottom: 1px solid black;
  padding: 0.7rem 0;
`;
