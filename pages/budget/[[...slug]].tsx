import React from 'react';
import { useRouter } from 'next/router';
import Tabs from '@/components/Tabs/Tabs';
import { Wrapper } from '@/styles/utils/utils';
import styled from 'styled-components';
import BudgetForm from '@/components/BudgetForm/BudgetForm';

const BudgetHome = () => {
  const router = useRouter();
  const { slug } = router.query;
  const paths = slug && slug[0];

  enum URLS {
    CLIENTS = 'client',
    ACTIVE = 'active',
    BUDGET = 'cal',
  }

  return (
    <Wrapper>
      <Tabs slug={paths} />
      <TabsDisplayPage>
        {paths === undefined && <p>Budget Page</p>}
        {paths === URLS.CLIENTS && <p>client</p>}
        {paths === URLS.ACTIVE && <p>active clients</p>}
        {paths === URLS.BUDGET && <BudgetForm />}
      </TabsDisplayPage>
    </Wrapper>
  );
};

export default BudgetHome;

const TabsDisplayPage = styled.div`
  /* height: 60px; */
  min-height: 60vh;
`;
