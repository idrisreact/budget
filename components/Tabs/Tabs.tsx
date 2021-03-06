import React, { FC, useState } from 'react';
import styled from 'styled-components';
import TabItems from './TabItems/TabItems';

export interface PageTabsProps {
  id: string | number;
  title: string;
  url: string;
}

const pageTabs: PageTabsProps[] = [
  {
    id: 1,
    title: 'Clients',
    url: 'client',
  },
  {
    id: 2,
    title: 'Active Clients',
    url: 'active',
  },
  {
    id: 3,
    title: 'Budgets',
    url: 'cal',
  },
];

interface IProps {
  slug: string | string[] | undefined;
}

const Tabs: FC<IProps> = ({ slug }) => {
  const [tabs, setTabs] = useState(pageTabs);

  const selectedTabHandler = (id: number | string) => {
    setTabs(
      tabs.map((tab) => {
        if (tab.id === id) {
          return { ...tab, isSelected: true };
        }
        return { ...tab, isSelected: false };
      })
    );
  };
  return (
    <TabsWrapper>
      {tabs.map(({ id, ...tab }) => (
        <TabItems slug={slug} key={id} id={id} {...tab} />
      ))}
    </TabsWrapper>
  );
};

export default Tabs;

const TabsWrapper = styled.div`
  border-bottom: 1px solid #888;
  padding-bottom: 5px;
  display: flex;
  margin: 75px 0 15px;
  & > * {
    margin-right: 20px;
  }
`;
