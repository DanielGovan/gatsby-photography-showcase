import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { type InferType } from 'yup';
import { Center, Flex } from '@chakra-ui/react';

// import { addData } from '../../utils/fireBaseCalls';
import { Box } from '../primitives';

import SubmitButton from './FormikChakra/SubmitButton';
import SelectControl from './FormikChakra/Select';
import TextareaControl from './FormikChakra/Textarea';

// this needs to be notes, status...

const ContactSchema = yup.object({
  shootPolls_adminNotes: yup.string(),
  shootPolls_adminStatus: yup.string(),
});

interface CollabFormValues extends InferType<typeof ContactSchema> {}

type miniDetailsProps = {
  uid: string;
  status: string;
  notes: string;
};

export const MiniDetails = ({ uid, status, notes }: miniDetailsProps) => {
  const initialValues: CollabFormValues = {
    shootPolls_adminNotes: notes,
    shootPolls_adminStatus: status,
  };
  return (
    <Flex justifyContent="center">
      <Formik
        initialValues={initialValues}
        onSubmit={async values => {
          const results = Object.fromEntries(
            Object.entries(values).filter(([key, value]) => key !== 'shootPollsContact'),
          );
          // addData(results, uid);
        }}
        validationSchema={ContactSchema}
      >
        {({ values }) => {
          return (
            <Form name="mini-contact">
              <Box mt="1rem"></Box>
              <Flex
                maxW="400px"
                flexDirection={['row']}
                gap="1rem"
                wrap="wrap"
                justifyContent="center"
                fontSize="1.5rem"
              >
                <TextareaControl
                  mt="1rem"
                  fieldName="shootPolls_adminNotes"
                  labelText="Notes"
                  placeholder=""
                />
                <SelectControl labelText="Status" fieldName="shootPolls_adminStatus">
                  <option value={undefined}>Pending</option>
                  <option value="Shortlist">Shortlist</option>
                  <option value="NoInfo">No info</option>
                  <option value="PaidLead">PaidLead</option>
                  <option value="Longlist">Longlist</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Complete">Complete</option>
                </SelectControl>
                <Center my="2rem" mb="1rem">
                  <SubmitButton>Update</SubmitButton>
                </Center>
              </Flex>
            </Form>
          );
        }}
      </Formik>
    </Flex>
  );
};
