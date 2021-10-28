import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SUPPORT_STEPS } from "../config/questionConstants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  padding: 20px;
  gap: 2rem;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  white-space: pre-line;
`;

const OptionsContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  height: 100%;
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
    border: 1.5px solid grey;
    text-transform: none;
    color: black;
    font-size: 1.5rem;
    min-width: 15rem;
  }
  &.MuiButton-outlined:hover {
    border: 1.5px solid darkgrey;
    transform: scale(1.1);
  }
`;

const TypeToComponent = {
  info: Alert,
};

function SupportGuide({ step, handleOptionSelect, handleNext, handleBack }) {
  // render current step text and options as buttons
  const currentStep = SUPPORT_STEPS.find((s) => s.step === step);
  const { options, lines } = currentStep;

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
    </Container>
  );
}

export default SupportGuide;
