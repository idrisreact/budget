import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 15px;
  margin: 0 auto;
  max-width: 100%;
  @media (max-width: ${({ theme }) => theme.screenSize?.md}) {
    max-width: 600px;
  }

  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    max-width: 840px;
  }
  @media (min-width: ${({ theme }) => theme.screenSize.xl}) {
    max-width: 1200px;
  }
`;

export const Heading = styled.h1<any>`
  font-size: 24px;
  color: ${(props) => (props.color ? props.color : 'black')};

  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    font-size: ${(props) => (props.fontSize ? props.fontSize : '24px')};
    letter-spacing: 0.7px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  @media (min-width: ${({ theme }) => theme.screenSize.lg}) {
    font-size: 16px;
    letter-spacing: 0.7px;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 8px 16px 8px 5px;
  border: 1px solid #b0b5b3;
  border-radius: 3px;
`;
