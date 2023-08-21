import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { type InferType } from 'yup';
import { Button, Center, Flex } from '@chakra-ui/react';

// import { addData } from '../../utils/fireBaseCalls';
import { Box } from '../primitives';
import { BodyHeader, BodyText } from '../typography';
import { BoxLink } from '../link/Link';

import SubmitButton from './FormikChakra/SubmitButton';
import Question from './Question';
import QuestionChecks, { CheckboxItem } from './QuestionChecks';

// Yup Validation

const ContactSchema = yup.object({
  a_shootPollsName: yup.string().required('What do I call you?'),
  shootPollsContact: yup.array(),
  shootPollsContact_instagram: yup.string(),
  shootPollsContact_twitter: yup.string(),
  shootPollsContact_otherTwitter: yup.string(),
  shootPollsContact_email: yup.string().email('Invalid email'),
  shootPollsContact_phone: yup.string(),
});

interface CollabFormValues extends InferType<typeof ContactSchema> {}

const initialValues: CollabFormValues = {
  a_shootPollsName: '',
  shootPollsContact: [],
  shootPollsContact_instagram: '',
  shootPollsContact_twitter: '',
  shootPollsContact_otherTwitter: '',
  shootPollsContact_email: '',
  shootPollsContact_phone: '',
};

type ToggleQuestionProps = {
  values: any;
  parent: string;
  type: string;
  label?: string;
};

const ToggleQuestion = ({ values, parent, type, label }: ToggleQuestionProps) => (
  <>
    {label ? (
      <CheckboxItem fieldName={parent} value={type} labelText={label} />
    ) : (
      <CheckboxItem fieldName={parent} value={type} />
    )}
    {values?.shootPollsContact?.includes(type) && (
      <Question
        mt="1rem"
        fieldName={`${parent}_${type}`}
        labelText=""
        placeholder="Please write"
      />
    )}
  </>
);

export const MiniContactForm = ({ uid }: { uid: string }) => {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <Flex justifyContent="center">
      <Formik
        initialValues={initialValues}
        onSubmit={async values => {
          const results = Object.fromEntries(
            Object.entries(values).filter(([key, value]) => key !== 'shootPollsContact'),
          );
          // addData(results, uid);
          setIsFinished(true);
        }}
        validationSchema={ContactSchema}
      >
        {({ values }) => {
          return (
            <Form name="mini-contact">
              <Flex
                flexDirection={['row']}
                gap="1rem"
                wrap="wrap"
                justifyContent="center"
                fontSize="1.5rem"
              >
                {!isFinished ? (
                  <Box m="2rem" mb="0">
                    <BodyHeader>Lorem ipsum!</BodyHeader>
                    <BodyText my="1rem">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
                      laborum est fuga ipsum vel tenetur suscipit culpa dolorum provident
                      excepturi?
                    </BodyText>
                    <Box maxW="500px" mx="auto" mt="3rem">
                      <Question
                        mt="1rem"
                        fieldName="a_shootPollsName"
                        labelText="Lorem"
                        placeholder=""
                      />
                      <Question
                        mt="1rem"
                        fieldName="a_shootPollsFeel"
                        labelText="Lorem ipsum?"
                        placeholder=""
                      />
                      <QuestionChecks
                        fieldName="shootPollsContact"
                        labelText="Add some points of contact:"
                        display="flex"
                        flexDirection="column"
                        alignItems="left"
                      >
                        {/* <ToggleQuestion
                          values={values}
                          parent="shootPollsContact"
                          label="Phone/WhatsApp"
                          type="phone"
                        /> */}
                        <ToggleQuestion
                          values={values}
                          parent="shootPollsContact"
                          type="instagram"
                        />
                        <ToggleQuestion
                          values={values}
                          parent="shootPollsContact"
                          type="twitter"
                        />
                        <ToggleQuestion
                          values={values}
                          parent="shootPollsContact"
                          type="otherTwitter"
                          label="other twitter"
                        />
                        <ToggleQuestion
                          values={values}
                          parent="shootPollsContact"
                          type="email"
                        />
                      </QuestionChecks>
                    </Box>
                    <Center my="2rem" mb="1rem">
                      <SubmitButton>Submit</SubmitButton>
                    </Center>
                  </Box>
                ) : (
                  <Box my="2rem" textAlign={'center'}>
                    <BodyHeader>More stuff:</BodyHeader>
                    <BoxLink target="/commissions">
                      <Button>Link 1</Button>
                    </BoxLink>
                    <BoxLink target="/retrospective">
                      <Button>Link 2</Button>
                    </BoxLink>
                    <BoxLink target="/gallery">
                      <Button>Link 3</Button>
                    </BoxLink>
                  </Box>
                )}
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};
