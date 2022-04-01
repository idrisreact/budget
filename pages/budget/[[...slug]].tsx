import React from 'react';
import { useRouter } from 'next/router';
import Tabs from '@/components/Tabs/Tabs';
import { Wrapper } from '@/styles/utils/utils';
import BudgetForm from '@/components/BudgetForm/BudgetForm';

const BudgetHome = () => {
  const router = useRouter();
  const { slug } = router.query;
  const paths = slug && slug[0];

  return (
    <Wrapper>
      <Tabs slug={slug} />
      {paths === 'client' && <p>client</p>}
      {paths === 'active' && <p>active clients</p>}
      {paths === 'cal' && <BudgetForm />}
    </Wrapper>
  );
};

export default BudgetHome;
