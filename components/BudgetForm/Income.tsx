import { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Heading, Input, Text } from '@/styles/utils/utils';
import { useStore } from '../../zustand/store';
const Income = () => {
  const { income, setIncome } = useStore();
  const [toggleIncomeForm, setToggleIncomeForm] = useState(false);
  const { register, handleSubmit } = useForm();

  const updateMonthlyIncome = (data: any) => {
    const { income } = data;
    setIncome?.(income);
    setToggleIncomeForm(!toggleIncomeForm);
  };
  return (
    <div>
      {' '}
      <Heading fontSize="16px">
        Monthly earnings{' '}
        <span>
          <PenIcon onClick={() => setToggleIncomeForm(!toggleIncomeForm)} />
        </span>
      </Heading>
      <Text>{income}</Text>
      {toggleIncomeForm && (
        <IncomeFormElement onSubmit={handleSubmit(updateMonthlyIncome)}>
          <Input type="number" placeholder="income value" defaultValue={income} {...register('income')} />
        </IncomeFormElement>
      )}
    </div>
  );
};

export default Income;

const PenIcon = styled(FaPen)`
  width: 10px;
  cursor: pointer;
`;
const IncomeFormElement = styled.form`
  margin: 15px 0;
`;
