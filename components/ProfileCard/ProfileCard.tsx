import Image from 'next/image';
import styled from 'styled-components';
import { Button, Heading, Text } from '../../styles/utils/utils';
import Card from '../Card/Card';

const ProfileCard = () => {
  return (
    <ProfileCardWrapper>
      <ImageContainer>
        <Image src="/idris.png" alt="profile-image" width={60} height={60} objectFit="cover" objectPosition="top" />
      </ImageContainer>
      <ProfileDetailsContainer>
        <Details>
          <Heading>Idris Taiwo</Heading>
          <Text>Software Engineer</Text>
        </Details>
        <Finance>
          <div>
            <Text>Income</Text>
            <Text>£5000.99</Text>
          </div>
          <div>
            <Text>Expenses</Text>
            <Text>£1800</Text>
          </div>
          <div>
            <Text>Balance</Text>
            <Text>£3200.99</Text>
          </div>
        </Finance>
        <ButtonSection>
          <Button>Chat</Button>
          <Button>Follow</Button>
        </ButtonSection>
      </ProfileDetailsContainer>
    </ProfileCardWrapper>
  );
};

export default ProfileCard;

const ProfileCardWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  /* gap: 10px; */
  align-items: start;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  padding: 0 10px;
  img {
    border-radius: 50px;
  }
`;

const ProfileDetailsContainer = styled.div`
  display: grid;
`;
const Details = styled.div`
  h2 {
    letter-spacing: 2px;
    font-weight: 500;
  }
  p {
    color: #444;
    font-size: 12px;
  }
`;
const Finance = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

const ButtonSection = styled.div`
  display: flex;
  margin-top: 20px;
  & > * {
    margin-right: 10px;
  }
`;
