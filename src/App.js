import React, { useState } from "react";
import "normalize.css";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import styled from "styled-components";
import SupportGuide from "./components/SupportGuide";

const StyledContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  const [userHistory, setUserHistory] = useState([]);
  const [step, setStep] = useState(1);

  // set option and add to history
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setUserHistory([...userHistory, option]);
  };

  const handleNextStep = (selectedStep) => {
    if (selectedStep) {
      setStep(selectedStep);
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
    // remove last option from history
    setUserHistory(userHistory.slice(0, userHistory.length - 1));
  };

  return (
    <>
      <GlobalStyles />
      <Typography />
      <StyledContainer>
        <SupportGuide
          step={step}
          handleOptionSelect={handleOptionSelect}
          handleNext={handleNextStep}
          handleBack={handlePreviousStep}
          selectedOption={selectedOption}
        />
      </StyledContainer>
    </>
  );
}

export default App;
