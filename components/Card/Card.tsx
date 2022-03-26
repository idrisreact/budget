import { ReactNode, FC } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;
}
const Card: FC<IProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;

const CardWrapper = styled.article`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors?.white};
  padding: 0.5rem 0.5rem;
  box-shadow: 0px 1px 6px 3px rgba(173, 173, 173, 0.46);
  -webkit-box-shadow: 0px 1px 6px 3px rgba(173, 173, 173, 0.46);
  -moz-box-shadow: 0px 1px 6px 3px rgba(173, 173, 173, 0.46);
`;
