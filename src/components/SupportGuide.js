import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SupportForm from "./SupportForm";
import { SUPPORT_STEPS } from "../config/questionConstants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  gap: 2rem;
  @media (max-width: 767px) {
    align-items: center;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  white-space: pre-line;
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const OptionsContainer = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100%;
  justify-items: center;
  @media (max-width: 542px) {
    grid-template-columns: 1fr;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const StyledButton = styled(Button)`
  min-width: 15rem;
  height: 5rem;
  &.MuiButton-outlined {
    border: 1.5px solid var(--grey);
    text-transform: none;
    color: black;
    font-size: 1.5rem;
    min-width: 15rem;
    width: 100%;
  }
  &.MuiButton-outlined:hover {
    border: 1.5px solid var(--darkgrey);
    transform: scale(1.1);
  }
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

function SupportGuide({
  step,
  handleOptionSelect,
  handleNext,
  handleBack,
  handleStartOver,
}) {
  // render current step text and options as buttons
  const currentStep = SUPPORT_STEPS.find((s) => s.step === step);
  const { options, lines } = currentStep;
  const TypeToComponent = {
    info: Alert,
    supportForm: () => <SupportForm handleSubmit={handleSupportFormSubmit} />,
  };

  const handleSupportFormSubmit = (data) => {
    console.log(data);
    handleNext(9);
  };

  // replace string in text with component using TypeToComponent
  const TextToComponent = (lines) => {
    if (lines.length === 0) return null;
    return lines.map((line) => {
      const { text, type, props } = line;
      const Component = type ? TypeToComponent[type] : Text;
      return <Component {...props}>{text}</Component>;
    });
  };

  const handleNextStep = (option) => {
    switch (option) {
      case "Yes":
        handleNext(7);
        break;
      case "No":
        handleNext();
        break;
      case "Open a case":
        console.log("open a case");
        handleNext(8);
        break;
      case "Done":
        console.log("done");
        break;
      case "Troubleshoot other issues":
        handleNext(2);
        break;
      default:
        handleNext();
        break;
    }
  };

  // select option and go to next step
  const onSelect = (option) => {
    handleOptionSelect(option);
    handleNextStep(option);
  };

  return (
    <Container>
      <TextContainer>{TextToComponent(lines)}</TextContainer>
      <OptionsContainer>
        {options.map((option) => (
          <StyledButton
            variant="outlined"
            key={option}
            onClick={() => onSelect(option)}
          >
            {option}
          </StyledButton>
        ))}
      </OptionsContainer>
      <StyledButtonsContainer>
        {step !== 1 && (
          <Button
            onClick={handleBack}
            style={{
              fontSize: "1.5rem",
            }}
          >
            <ArrowBackIcon
              fontSize="large"
              style={{
                marginRight: "0.5rem",
              }}
            />
            Back
          </Button>
        )}
        <Button variant="outlined" onClick={handleStartOver} title="Start Over">
          <RestartAltIcon
            fontSize="large"
            style={{
              marginRight: "0.5rem",
            }}
          />
          Start Over
        </Button>
      </StyledButtonsContainer>
    </Container>
  );
}

export default SupportGuide;
