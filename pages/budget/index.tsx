import { useState } from "react";
import styled from "styled-components";
import BudgetSystem from "../../src/components/BudgetSystem/BudgetSystem";
import { Button, Heading, Text, Wrapper } from "../../styles/utils/utils";

const BudgetPage = () => {
  const [showBudget, setShowBudget] = useState<boolean>(false);

  const toggleBudget = () => {
    setShowBudget((prev) => !prev);
  };
  return (
    <>
      <Wrapper>
        <Hero>
          <div>
            <Heading>Budget</Heading>
            <Text>A budget system that can help you reach your goals</Text>
          </div>
          <Button onClick={toggleBudget}>Start Here</Button>
        </Hero>
        {showBudget && <BudgetSystem />}
      </Wrapper>
    </>
  );
};

export default BudgetPage;

const Hero = styled.div`
  display: grid;
  align-content: start;
  margin-bottom: 50px;
  gap: 5px;
  ${Button} {
    margin-top: 10px;
    justify-self: start;
  }
`;
