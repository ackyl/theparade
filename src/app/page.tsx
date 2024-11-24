"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Components
const StyledTypography = styled(Typography)({
  color: "black",
  fontSize: "18px",
});

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: "black",
  "& .MuiTypography-root": {
    color: "black",
  },
  "& .MuiRadio-root.Mui-checked + .MuiTypography-root": {
    color: theme.palette.primary.main, // Blue text when the radio is selected
  },
}));

const FormSteps: React.FC = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    tool: "",
    feature: "",
    colorScheme: "",
    mascot: "",
    name: "",
  });

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handleBack = () => setStep((prevStep) => prevStep - 1);
  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    const summary = `
      Form Submitted Successfully!
      
      Your Choices:
      - Favorite Tool: ${formData.tool}
      - Favorite Feature: ${formData.feature}
      - Favorite Color Scheme: ${formData.colorScheme}
      - Favorite Mascot: ${formData.mascot}
      - Your Name: ${formData.name}
    `;
    alert(summary);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          p: 4,
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        {step === 0 && (
          <FormControl>
            <StyledTypography variant="h6" mb={3}>
              Which Adobe tool do you vibe with the most?
            </StyledTypography>
            <RadioGroup
              name="tool"
              value={formData.tool}
              onChange={(e) => handleChange("tool", e.target.value)}
            >
              {[
                "Photoshop",
                "Illustrator",
                "Premiere Pro",
                "After Effects",
              ].map((option) => (
                <StyledFormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              disabled={!formData.tool}
              sx={{ mt: 3 }}
            >
              Next
            </Button>
          </FormControl>
        )}

        {step === 1 && (
          <FormControl>
            <StyledTypography variant="h6" mb={3}>
              What’s your go-to feature in your favorite tool?
            </StyledTypography>
            <RadioGroup
              name="feature"
              value={formData.feature}
              onChange={(e) => handleChange("feature", e.target.value)}
            >
              {["Layers", "Brushes", "Timeline", "Keyframes"].map((option) => (
                <StyledFormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <Box sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={handleBack} sx={{ mr: 2 }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!formData.feature}
              >
                Next
              </Button>
            </Box>
          </FormControl>
        )}

        {step === 2 && (
          <FormControl>
            <StyledTypography variant="h6" mb={3}>
              Pick your favorite color scheme.
            </StyledTypography>
            <RadioGroup
              name="colorScheme"
              value={formData.colorScheme}
              onChange={(e) => handleChange("colorScheme", e.target.value)}
            >
              {["RGB", "CMYK", "Grayscale", "Duotone"].map((option) => (
                <StyledFormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <Box sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={handleBack} sx={{ mr: 2 }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!formData.colorScheme}
              >
                Next
              </Button>
            </Box>
          </FormControl>
        )}

        {step === 3 && (
          <FormControl>
            <StyledTypography variant="h6" mb={3}>
              Choose your mascot:
            </StyledTypography>
            <RadioGroup
              name="mascot"
              value={formData.mascot}
              onChange={(e) => handleChange("mascot", e.target.value)}
            >
              {[
                "Pencil the Penguin",
                "Brushy the Bunny",
                "Keyframer the Cat",
                "Palette the Parrot",
              ].map((option) => (
                <StyledFormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <Box sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={handleBack} sx={{ mr: 2 }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!formData.mascot}
              >
                Next
              </Button>
            </Box>
          </FormControl>
        )}

        {step === 4 && (
          <>
            <StyledTypography variant="h6" mb={3}>
              What’s your name?
            </StyledTypography>
            <TextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              variant="outlined"
              margin="normal"
            />
            <Box sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={handleBack} sx={{ mr: 2 }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!formData.name}
              >
                Submit
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default FormSteps;
