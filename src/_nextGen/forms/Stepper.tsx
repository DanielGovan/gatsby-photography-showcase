import React, { useEffect, useState } from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';
import { useFormikContext } from 'formik';

import { Box } from '../primitives';

import { useSteps } from './chakra-ui-steps/useSteps';

// import { Step, Steps, useSteps } from './chakra-ui-steps';
// import PercentComplete from './FormikChakra/PercentComplete';

type step = { label: string; length: number };

export const Stepper = ({
  children,
  steps,
}: {
  children: React.ReactNode;
  steps: step[];
}) => {
  const { nextStep, prevStep, activeStep, direction } = useSteps({
    initialStep: 0,
  });
  const stepsArray = React.Children.toArray(children);
  const currentStep = stepsArray[activeStep];
  let [ref, { height }] = useMeasure();
  let [parts, setParts] = useState<string[][]>([]);

  // can I turn it off on mobile? It would be better on its own page. Do I need to fork?
  // https://www.youtube.com/watch?v=G3OyF-lRAWo turn expandable box into a reusable thingy

  let variants = {
    enter: (direction: string) => ({
      x: direction === 'increasing' ? 100 : -100,
      height: height + 50,
    }),
    center: { x: 0, height: height + 50 },
    exit: (direction: string) => ({
      x: direction === 'increasing' ? -100 : +100,
      height: height + 50,
    }),
  };

  const { validateForm, setFieldTouched, initialValues, handleSubmit } =
    useFormikContext();

  //grabs the fields and splits them up according to steps prop
  useEffect(() => {
    if (initialValues) {
      let stepMap = [];
      const fields = Object.keys(initialValues);
      for (const step of steps) {
        const part = fields.splice(0, step.length);
        stepMap.push(part);
      }
      setParts(stepMap);
    }
  }, [initialValues, steps]);

  const pageHandler = () => {
    const todos = parts[activeStep];
    validateForm().then(errors => {
      let fail = false;
      for (const todo of todos) {
        // Checks & highlights every field in the step
        setFieldTouched(todo, true);
        if (errors.hasOwnProperty(todo)) {
          fail = true;
        }
      }
      if (fail === true) return;
      if (activeStep === steps.length - 1) {
        handleSubmit();
      }
      nextStep();
    });
  };

  return (
    <Flex flexDir="column" width="100%">
      {/* <PercentComplete /> */}
      <AnimatePresence custom={direction}>
        <Box>
          {/* activeStep={activeStep} */}
          {steps.map(({ label }) => (
            <Box key={label}>
              {/* label={label} */}
              <motion.div
                layout
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <Flex
                  width="100%"
                  mt={[0, 5]}
                  mx="auto"
                  borderWidth="1px"
                  borderRadius="lg"
                  bg="black"
                  px="10"
                  py="10"
                  flexDirection="column"
                  ref={ref}
                >
                  {currentStep}
                </Flex>
              </motion.div>
            </Box>
          ))}
        </Box>
      </AnimatePresence>
      {activeStep === steps.length ? (
        <Flex px={4} py={4} width="100%" flexDirection="column" bg="none">
          <Heading size="lg" textAlign="center" my="3rem" backgroundColor="none">
            Form submitted!
          </Heading>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end" justifyContent="space-between" mt="2">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={prevStep}
            size="sm"
            variant="ghost"
          >
            Prev
          </Button>
          <Button size="lg" onClick={pageHandler}>
            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </Flex>
      )}
    </Flex>
  );
};
