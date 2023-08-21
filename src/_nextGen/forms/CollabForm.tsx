import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { type InferType } from 'yup';
import { Center } from '@chakra-ui/react';

// import { addData } from '../../utils/fireBaseCalls';
import { BodyText } from '../typography';
import { Box } from '../primitives';
// import { useUid } from '../../utils/useUid';

import { QuestionsGroup } from './FormWrappers';
import Question from './Question';
import QuestionRadios, { Radio } from './QuestionRadios';
import SubmitButton from './FormikChakra/SubmitButton';

// Yup Validation

const CollabSchema = yup.object({
  name: yup.string().required('What do I call you?'),
  pronouns: yup.string(),
  height: yup
    .number()
    .required('Do you fit in my home studio <_<')
    .test(
      'Is positive?',
      'Do you fit in my home studio <_<',
      value => (value && value > 0) || false,
    ),
  heightUnit: yup.string(),
  email: yup.string().email('Invalid email').required('Please add your email address'),
  phoneNumber: yup
    .number()
    .required('Insta messages get lost easily')
    .test(
      'Is positive?',
      'Insta messages get lost easily',
      value => (value && value > 0) || false,
    ),
  twitter: yup.string(),
  insta: yup.string(),
  feel: yup.string().required('This one is important!'),
  love: yup.string().required('Your fave features or body parts?'),
});

const CollabForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const uid = useUid('collabForm');

  interface CollabFormValues extends InferType<typeof CollabSchema> {}

  const initialValues: CollabFormValues = {
    // Keep this order accurate
    name: '',
    pronouns: '',
    height: 0,
    heightUnit: 'metric',
    email: '',
    phoneNumber: 0,
    twitter: '',
    insta: '',
    feel: '',
    love: '',
  };
  return (
    <>
      {formSubmitted ? (
        <Center>
          <BodyText>Thanks for your submission! Here's a few more questions ^_^</BodyText>
        </Center>
      ) : (
        <>
          <Formik
            initialValues={initialValues}
            onSubmit={async values => {
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              // const docSent = await addData(values, uid)
              //   .then()
              //   .catch(exception => {
              //     console.log('err', exception);
              //   });
              setFormSubmitted(true);
            }}
            validationSchema={CollabSchema}
          >
            <Form name="contact-demo">
              <Box fontSize={['1.4rem']} maxWidth="800px" mx="auto" p={['1rem', '2rem']}>
                <Question
                  fieldName="name"
                  placeholder=""
                  // helperText="I help!"
                />
                <QuestionsGroup>
                  <Question fieldName="pronouns" placeholder="" className="short" />
                  <Question
                    fieldName="height"
                    labelText="Height"
                    placeholder=""
                    type="number"
                    className="short"
                  />
                  <QuestionRadios fieldName="heightUnit" mt="-0.5rem">
                    <Radio value="metric" labelText="cm" />
                    <Radio value="inches" labelText="feet/inches" />
                  </QuestionRadios>
                </QuestionsGroup>
                <QuestionsGroup>
                  <Question
                    fieldName="email"
                    labelText="email"
                    placeholder=""
                    type="email"
                  />
                  <Question
                    fieldName="phoneNumber"
                    labelText="phone / WhatsApp"
                    placeholder=""
                    type="number"
                  />
                </QuestionsGroup>
                <QuestionsGroup>
                  <Question fieldName="twitter" leftElement="@" placeholder="" />
                  <Question fieldName="instagram" leftElement="@" placeholder="" />
                </QuestionsGroup>

                <Question
                  mt="2rem"
                  fieldName="feel"
                  placeholder=""
                  labelText="How would you like to feel on a shoot?"
                />
                <Question
                  fieldName="love"
                  placeholder=""
                  labelText="What do you like most about how you look?"
                />
                <Center mt="2rem">
                  <SubmitButton>Submit</SubmitButton>
                </Center>
              </Box>
            </Form>
          </Formik>
        </>
      )}
    </>
  );
};
export default CollabForm;
