import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../styles/utils/utils';
import { FormData } from '../../src/interfaces/budget';
import BudgetItems from './BudgetItems/BudgetItems';
import ProfileCard from '../ProfileCard/ProfileCard';

const BudgetSystem = () => {
  const [budgets, setBudgets] = useState<FormData[]>([{ expense: 'rent', amount: 300 }]);
  const { register, handleSubmit } = useForm<FormData>();

  const submitHandler = (data: FormData) => {
    setBudgets((prev) => [...prev, { ...data }]);
  };
  return (
    <>
      <BudgetMenu>
        <ProfileCard />
        <BudgetItems budgets={budgets} />
      </BudgetMenu>
      <BudgetCanvas>
        <InputController onSubmit={handleSubmit(submitHandler)}>
          <Input placeholder="Expense" {...register('expense', { required: true })} />
          <Input placeholder="Amount" type="number" step=".01" {...register('amount')} />
          <Button>Add Expense</Button>
        </InputController>
      </BudgetCanvas>
    </>
  );
};

export default BudgetSystem;

const BudgetCanvas = styled.div`
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    max-width: 80%;
  }
`;
const BudgetMenu = styled.div`
  display: grid;
  gap: 10px;
  margin-bottom: 50px;
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    grid-template-columns: 2fr 300px 2fr;
  }
`;
const InputController = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5px;
  margin-bottom: 50px;
  /* max-width: 70%; */
  ${Input} {
  }
  ${Button} {
    @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }
`;
