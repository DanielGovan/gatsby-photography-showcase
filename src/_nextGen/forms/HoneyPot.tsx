import React from 'react';

import { FormLabel } from '@chakra-ui/react';
import { Field } from 'formik';

import { Box } from '../primitives';

const Honeypot = () => {
  return (
    <Box
      opacity={0}
      position="absolute"
      top={0}
      left={0}
      height={0}
      width={0}
      zIndex={-1}
      overflow="hidden"
    >
      <FormLabel htmlFor="firstName">First Name</FormLabel>
      <Field
        name="firstName"
        autoComplete="new-first-name"
        value=""
        placeholder="Your first name here"
      />
      <FormLabel htmlFor="surname">Surname</FormLabel>
      <Field
        name="surname"
        autoComplete="new-surname-name"
        value=""
        placeholder="Your surname here"
      />
      <FormLabel htmlFor="email">Email</FormLabel>
      <Field
        name="email"
        autoComplete="brand-new-email"
        value=""
        placeholder="Your e-mail here"
      />
    </Box>
  );
};

export default Honeypot;
