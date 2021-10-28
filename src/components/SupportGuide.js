import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

const steps = [
  {
    step: 1,
    text: "Welcome to SkyCom's iPhone Troubleshooting. \n\n To begin we will need the correct model you are using?",
    lines: [
      {
        text: "Welcome to Guided iPhone Troubleshooting",
      },
      {
        text: "To begin we will need the correct model you are using?",
      },
    ],
    options: [
      "iPhone 12",
      "iPhone 11",
      "iPhone XS",
      "iPhone XR",
      "iPhone XS Max",
      "iPhone X",
    ],
  },
  {
    step: 2,
    text: "<info>Thank you for the information. Please select the issue you are experiencing with your iPhone.</info>",
    lines: [
      {
        text: "Thank you for the information. Please select the issue you are experiencing with your iPhone.",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: [
      "iPhone is running slowly",
      "iPhone does not connect to Wi-Fi",
      "iPhone is not repsonding",
      "iPhone screen/body is damaged",
    ],
  },
  {
    step: 3,
    text: "First, please do the following: Clear your phone's browser cache. How do I clear my cache?  Go to Settings > Safari > Clear History and Website Data.If you just want to clear the website data collected, you’ll need to tap Settings > Safari > Advanced > Website Data > Remove all website data.",
    lines: [
      {
        text: "First, please do the following: Clear your phone's browser cache.",
      },
      {
        text: "How do I clear my cache?",
      },
      {
        text: "Go to Settings > Safari > Clear History and Website Data.If you just want to clear the website data collected, you’ll need to tap Settings > Safari > Advanced > Website Data > Remove all website data.",
      },
      {
        text: "Did that resolve your issue?",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: ["Yes", "No"],
  },
  {
    step: 4,
    text: "Next: Update your phone's OS. How do I update OS? Make sure your phone is plugged in for charging and is connected to WiFi. Go to Settings > General > Software Update.",
    lines: [
      {
        text: "Next: Update your phone's OS.",
      },
      {
        text: "How do I update OS?",
      },
      {
        text: "Make sure your phone is plugged in for charging and is connected to WiFi.",
      },
      {
        text: "Go to Settings > General > Software Update.",
      },
      {
        text: "Does that resolve your issue?",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: ["Yes", "No"],
  },
  {
    step: 5,
    text: "Next: Delete apps that you don't use.Note: There are two ways to remove apps on an iPhone. Delete Apps – removes an app and all its data.Offload Apps – removes an app but keeps a backup of its data.How do I delete apps?Press and hold the app you want to delete and, once it begins to shake around on your screen, tap the “x” in the top left cornerAlternatively, you can go to Settings > General > iPhone Storage > Select app > Delete app.How do I offload apps?Go to Settings > General > iPhone Storage > Offload Unused Apps > Enable.",
    lines: [
      {
        text: "Next: Delete apps that you don't use.",
      },
      {
        text: "Note: There are two ways to remove apps on an iPhone.",
      },
      {
        text: "Delete Apps – removes an app and all its data.",
      },
      {
        text: "Offload Apps – removes an app but keeps a backup of its data.",
      },
      {
        text: "How do I delete apps?",
      },
      {
        text: "Press and hold the app you want to delete and, once it begins to shake around on your screen, tap the “x” in the top left corner.",
      },
      {
        text: "Alternatively, you can go to Settings > General > iPhone Storage > Select app > Delete app.",
      },
      {
        text: "How do I offload apps?",
      },
      {
        text: "Go to Settings > General > iPhone Storage > Offload Unused Apps > Enable.",
      },
      {
        text: "Does that resolve your issue?",
        type: "info",
        props: {
          variant: "filled",
          severity: "info",
          style: {
            fontSize: "1.5rem",
          },
        },
      },
    ],
    options: ["Yes", "No"],
  },
  {
    step: 6,
    text: "",
    lines: [],
    options: ["Open a case"],
  },
  {
    step: 7,
    text: "That's great. We're glad that resolved your issue.",
    lines: [
      {
        text: "That's great. We're glad that resolved your issue.",
      },
    ],
    options: ["Done", "Troubleshoot other issues"],
  },
];

const TypeToComponent = {
  info: Alert,
  error: Alert,
  success: Alert,
};

function SupportGuide({ step, handleOptionSelect, handleNext, handleBack }) {
  // render current step text and options as buttons
  const currentStep = steps.find((s) => s.step === step);
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
