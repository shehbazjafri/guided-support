import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledFormContainer = styled.div`
  background: var(--white);
  width: 70vw;
  height: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  padding: 1rem;
  margin: 1rem;
`;

function SupportForm({ handleSubmit }) {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formFields);
    handleSubmit(formFields);
  };

  return (
    <StyledFormContainer>
      <StyledForm onSubmit={onSubmit}>
        <TextField
          type="text"
          name="name"
          label="Name"
          required
          value={formFields.name}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="email"
          label="Email"
          required
          value={formFields.email}
          onChange={handleChange}
          error={formFields.email.length > 0 && !formFields.email.includes("@")}
        />
        <TextField
          type="text"
          name="subject"
          label="Subject"
          required
          value={formFields.subject}
          onChange={handleChange}
        />
        <TextField
          name="description"
          label="Description"
          value={formFields.description}
          onChange={handleChange}
          multiline
          required
          rows={4}
        />
        <Button
          variant="contained"
          type="submit"
          style={{
            width: "10rem",
            height: "4rem",
          }}
        >
          Submit
        </Button>
      </StyledForm>
    </StyledFormContainer>
  );
}

export default SupportForm;
