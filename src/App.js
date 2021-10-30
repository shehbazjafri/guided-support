import React, { useState } from "react";
import "normalize.css";
import GlobalStyles from "./styles/GlobalStyles";
import Typography from "./styles/Typography";
import styled from "styled-components";
import SupportGuide from "./components/SupportGuide";
import iphoneImg from "./assets/images/iphone-6.png";

const StyledHeader = styled.header`
  background-color: var(--secondaryBlue);
  min-height: 8vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  padding: 1rem;
  justify-content: center;
  color: var(--white);
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(max(240px, 40vw), 1fr));
  align-items: center;
  justify-items: center;
  padding-left: 10vw;
  padding-right: 10vw;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    padding-left: 0;
    padding-right: 0;
  }
`;

function App() {
  const [userHistory, setUserHistory] = useState([]);
  const [step, setStep] = useState(1);

  // add to history
  const handleOptionSelect = (option) => {
    setUserHistory([
      ...userHistory,
      {
        step: step,
        option: option,
      },
    ]);
  };

  const handleNextStep = (selectedStep) => {
    if (selectedStep) {
      setStep(selectedStep);
    } else {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    // go to previous step from history
    const previousStep = userHistory[userHistory.length - 1];
    setStep(previousStep.step);
    // remove last step from history
    setUserHistory(userHistory.slice(0, userHistory.length - 1));
  };

  // start over
  const handleStartOver = () => {
    setStep(1);
    setUserHistory([]);
  };

  return (
    <>
      <GlobalStyles />
      <Typography />
      <StyledHeader>
        <h1>Support Guide</h1>
      </StyledHeader>
      <StyledContainer>
        {step === 1 && (
          <ImageContainer>
            <img src={iphoneImg} alt="iphone" width={300} height={300} />
          </ImageContainer>
        )}
        <SupportGuide
          step={step}
          handleOptionSelect={handleOptionSelect}
          handleNext={handleNextStep}
          handleBack={handlePreviousStep}
          handleStartOver={handleStartOver}
        />
      </StyledContainer>
    </>
  );
}

export default App;
