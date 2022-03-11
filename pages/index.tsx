import type { NextPage } from "next";
import styled, { useTheme } from "styled-components";
import Card from "../src/components/Card/Card";
import ProfileCard from "../src/components/ProfileCard/ProfileCard";
import { Wrapper } from "../styles/utils/utils";

const Home: NextPage = () => {
  return (
    <div>
      <Wrapper>home</Wrapper>
    </div>
  );
};

export default Home;

const ProfileWrapper = styled.div`
  max-width: 30%;
`;
