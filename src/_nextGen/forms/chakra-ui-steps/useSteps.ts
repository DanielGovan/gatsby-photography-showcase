import * as React from 'react';
type UseSteps = {
  initialStep: number;
};

export function useSteps({ initialStep }: UseSteps) {
  let [activeStep, setActiveStep] = React.useState(initialStep);
  let [tuple, setTuple] = React.useState([0, activeStep]); // [prev, current]

  if (tuple[1] !== activeStep) {
    setTuple([tuple[1], activeStep]);
  }

  let prev = tuple[0];

  let direction = activeStep > prev ? 'increasing' : 'decreasing';

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const prevStep = () => {
    setActiveStep(activeStep - 1);
  };

  const reset = () => {
    setActiveStep(initialStep);
  };

  const setStep = (step: number) => {
    setActiveStep(step);
  };

  return { nextStep, prevStep, reset, setStep, activeStep, direction };
}
