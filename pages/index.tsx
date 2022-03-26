import type { NextPage } from 'next';
import styled from 'styled-components';

import { Wrapper } from '../styles/utils/utils';

const Home: NextPage = () => (
  <div>
    <Wrapper>home</Wrapper>
  </div>
);

export default Home;

const ProfileWrapper = styled.div`
  max-width: 30%;
`;
