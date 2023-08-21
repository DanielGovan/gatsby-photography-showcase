import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { type InferType } from 'yup';
import { Center } from '@chakra-ui/react';

// import { addData } from '../../utils/fireBaseCalls';
import { BodyText } from '../typography';
import { Box, Flex } from '../primitives';
// import { useUid } from '../../utils/useUid';

import { QuestionsGroup } from './FormWrappers';
import Question from './Question';
import QuestionRadios, { Radio } from './QuestionRadios';
import SubmitButton from './FormikChakra/SubmitButton';
import TextareaControl from './FormikChakra/Textarea';
import QuestionChecks, { CheckboxItem } from './QuestionChecks';

// Yup Validation

const ContactSchema = yup.object({
  name: yup.string().required('Please enter your name'),
  pronouns: yup.string(),
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
  feel: yup.string().required('Anything, off the top of your head'),
  package: yup.string().required('Please pick a package'),
  shootType: yup.array().min(1, 'Please pick a shoot type'),
  commishNotes: yup.string(),
});

interface CollabFormValues extends InferType<typeof ContactSchema> {}

const CollabForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  // const uid = useUid('commissionForm');

  // Keep this order accurate
  // name: '',
  // pronouns: '',
  // email: '',
  // phoneNumber: 0,
  // twitter: '',
  // insta: '',
  // feel: '',
  // package (radio) 120, 250, custom
  // shoot type (checkbox) (thirsty, headshots, drag, fitness, couple, other),
  // optional questions based on the above: reference shots, what you like and don't like about your body, how many looks
  // month you want to book (select)
  // additional deets (textarea)

  const initialValues: CollabFormValues = {
    // Keep this order accurate
    name: '',
    pronouns: '',
    email: '',
    phoneNumber: 0,
    twitter: '',
    insta: '',
    feel: '',
    package: '',
    shootType: [],
    // package (radio) 120, 250, custom
    // shoot type (checkbox) (thirsty, headshots, drag, fitness, couple, other),
    // optional questions based on the above: reference shots, what you like and don't like about your body, how many looks
    // month you want to book (select)
    // additional deets (textarea)
    commishNotes: '',
  };
  return (
    <>
      {formSubmitted ? (
        <Center my={['2rem', '4rem']}>
          <BodyText>
            Thanks for your inquiry! If I don't get back to you in a day it means my
            auto-mailer is broken, please chase up on socials
          </BodyText>
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
            validationSchema={ContactSchema}
          >
            <Form name="contact-demo">
              <Box fontSize={['1.4rem']} maxWidth="800px" mx="auto" p={['1rem', '2rem']}>
                <QuestionsGroup>
                  <Question
                    fieldName="name"
                    placeholder=""
                    // helperText="I help!"
                  />
                  <Question fieldName="pronouns" placeholder="" className="short" />
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
                <Flex flexDirection={['column', 'row']} gap="1rem">
                  <Flex flexDirection={['column', 'row']}>
                    <QuestionRadios
                      fieldName="package"
                      labelText="Lorem ipsum dolor sit."
                    >
                      <Radio value="commission" labelText="Option1" />
                      <Radio value="creative" labelText="Option2" />
                      <Radio value="couple" labelText="Option3" />
                      <Radio value="custom" labelText="Option3" />
                      <BodyText fontSize="18px" lineHeight="20px" pt="20px">
                        <small>
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos,
                          alias.
                        </small>
                      </BodyText>
                    </QuestionRadios>
                    <Box></Box>
                  </Flex>
                  <Flex flexDirection={['column', 'row']}>
                    <QuestionChecks
                      fieldName="shootType"
                      labelText="Lorem ipsum dolor sit."
                    >
                      <CheckboxItem fieldName="shootType" value="Option1" />
                      <CheckboxItem fieldName="shootType" value="Option2" />
                      <CheckboxItem fieldName="shootType" value="Option3" />
                      <CheckboxItem fieldName="shootType" value="Option4" />
                      <CheckboxItem fieldName="shootType" value="Option5" />
                      <CheckboxItem fieldName="shootType" value="Option6" />
                    </QuestionChecks>
                    <Box></Box>
                  </Flex>
                </Flex>
                <Question
                  mt="2rem"
                  fieldName="feel"
                  placeholder=""
                  labelText="Lorem ipsume dolor sit amet?"
                />
                <TextareaControl
                  mt="2rem"
                  labelText="Lorem ipsume dolor sit amet?"
                  fieldName="commishNotes"
                ></TextareaControl>
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
