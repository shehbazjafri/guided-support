import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const steps = [
  {
    step: 1,
    text: "Welcome to SkyCom's iPhone Troubleshooting \n To begin we will need the correct model you are using?",
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
    text: "Thank you for the information. Please select the issue you are experiencing with your iPhone.",
    options: ["Battery", "Camera", "Display", "Headphones", "Microphone"],
  },
  {
    step: 3,
    text: "First, please do the following: Clear your phone's browser cache. How do I clear my cache?  Go to Settings > Safari > Clear History and Website Data.If you just want to clear the website data collected, you’ll need to tap Settings > Safari > Advanced > Website Data > Remove all website data.",
    options: ["Yes", "No"],
  },
  {
    step: 4,
    text: "Next: Update your phone's OS. How do I update OS? Make sure your phone is plugged in for charging and is connected to WiFi. Go to Settings > General > Software Update.",
    options: ["Yes", "No"],
  },
  {
    step: 5,
    text: "Next: Delete apps that you don't use.Note: There are two ways to remove apps on an iPhone. Delete Apps – removes an app and all its data.Offload Apps – removes an app but keeps a backup of its data.How do I delete apps?Press and hold the app you want to delete and, once it begins to shake around on your screen, tap the “x” in the top left cornerAlternatively, you can go to Settings > General > iPhone Storage > Select app > Delete app.How do I offload apps?Go to Settings > General > iPhone Storage > Offload Unused Apps > Enable.",
    options: ["Yes", "No"],
  },
  {
    step: 6,
    text: "",
    options: ["Open a case"],
  },
  {
    step: 7,
    text: "That's great. We're glad that resolved your issue.",
    options: ["Done", "Troubleshoot other issues"],
  },
];
function SupportGuide({ step, handleOptionSelect, handleNext, handleBack }) {
  // render current step text and options as buttons
  const currentStep = steps.find((s) => s.step === step);
  const { text, options } = currentStep;

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
      <Text>{text}</Text>
      <OptionsContainer>
        {options.map((option) => (
          <Button key={option} onClick={() => onSelect(option)}>
            {option}
          </Button>
        ))}
      </OptionsContainer>
      {step !== 1 && <Button onClick={handleBack}>Back</Button>}
    </Container>
  );
}

export default SupportGuide;
