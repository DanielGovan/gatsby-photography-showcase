import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Center, Flex, Icon, Progress } from '@chakra-ui/react';
import { FaChevronRight } from 'react-icons/fa';

// import { addData } from '../../utils/fireBaseCalls';
import { ButtonGroup } from '../primitives';
import { Button } from '../button';
// import { Charts, useDataListener } from '../../utils/useDataListener';
// import { useUid } from '../../utils/useUid';

import SubmitButton from './FormikChakra/SubmitButton';
import { PollQuestion, type PollQuestionProps } from './PollQuestion';
import { shootQuestions } from './PollData';
import { MiniContactForm } from './MiniContact';

// Yup Validation

const getYupObject = (pollQuestions: PollQuestionProps[]) => {
  let object: any = {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [i, question] of pollQuestions.entries()) {
    object[`poll_${question.fieldName}`] = question.multiAnswer
      ? yup.array()
      : yup.string();
    object[`poll_${question.fieldName}_Other`] = yup.string();
  }
  return object;
};

const getInitialValues = (pollQuestions: PollQuestionProps[]) => {
  let object: any = {};

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [i, question] of pollQuestions.entries()) {
    object[`poll_${question.fieldName}`] = question.multiAnswer ? [] : '';
  }
  return object;
};

// const getChartPercentages = (
//   charts: Charts,
//   currentQuestion: number,
//   fieldName: string,
// ) => {
//   const keys = shootQuestions[currentQuestion].questions;
//   if (!charts[fieldName]) return;
//   const values = Object.values(charts[fieldName]).flat();
//   const percentages = keys.map(key => {
//     const votes = values.filter(currentItem => currentItem === key).length;
//     return (votes / values.length) * 100;
//   });
//   return percentages;
// };

const yupObject = getYupObject(shootQuestions);
const initialValues = getInitialValues(shootQuestions);
const PollsSchema = yup.object(yupObject);

const PollForm = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  const totalQuestions = shootQuestions.length;
  const currentName = `poll_${shootQuestions[currentQuestion].fieldName}`;
  const answered = !!answeredQuestions.includes(currentName);
  // const charts = useDataListener('polls');
  // const uid = useUid('pollsForm');
  // const currentAnswers = charts
  //   ? getChartPercentages(charts, currentQuestion, currentName)
  //   : undefined;

  const nextHandler = () => {
    if (currentQuestion === totalQuestions - 1) {
      setIsFinished(true);
      return null;
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Flex justifyContent="center" position="relative">
      {isFinished ? (
        <MiniContactForm uid="tempUID" />
      ) : (
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={async values => {
              // addData(values, uid);
              setAnsweredQuestions([...answeredQuestions, currentName]);
            }}
            validationSchema={PollsSchema}
          >
            {({ values }) => (
              <Form name="polls-seed">
                <Flex
                  flexDirection={['row']}
                  gap="1rem"
                  wrap="wrap"
                  justifyContent="center"
                  fontSize="1.5rem"
                >
                  <PollQuestion
                    {...shootQuestions[currentQuestion]}
                    // percentages={answered ? currentAnswers : undefined}
                    answered={answered}
                  />
                </Flex>
                <Center mt={['0rem', '1rem']} mb="1rem">
                  <ButtonGroup
                    height="3rem"
                    gap="3rem"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="sm"
                  >
                    {!answered ? (
                      <SubmitButton
                        disabled={
                          !(
                            (values[currentName] && values[currentName].length > 0) ||
                            values.shootPollsName
                          )
                        }
                      >
                        Submit
                      </SubmitButton>
                    ) : (
                      <Button
                        disabled={isFinished}
                        onClick={() => {
                          nextHandler();
                        }}
                      >
                        Next <Icon as={FaChevronRight} />
                      </Button>
                    )}
                  </ButtonGroup>
                </Center>
              </Form>
            )}
          </Formik>
          <Progress
            value={(currentQuestion / totalQuestions) * 100}
            position="absolute"
            top="-10px"
            left="-10px"
            right="-10px"
            zIndex={999}
            onClick={e => e.stopPropagation()}
            cursor="default"
          />
        </>
      )}
    </Flex>
  );
};
export default PollForm;
