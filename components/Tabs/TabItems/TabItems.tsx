import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { PageTabsProps } from '../Tabs';

interface TabsProps extends PageTabsProps {
  clickHandle: () => void;
}

const TabItems: FC<TabsProps> = ({ title, isSelected, clickHandle, url }) => {
  return (
    <Link href={url}>
      <TabButton selected={isSelected} onClick={clickHandle}>
        {title}
      </TabButton>
    </Link>
  );
};

export default TabItems;

const TabButton = styled.button<any>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  &::after {
    content: '';
    position: absolute;
    background-color: ${({ selected }) => selected && 'red'};
    width: 110%;
    height: 2px;
    left: 0;
    bottom: -6px;
  }
  &:hover {
  }
`;
