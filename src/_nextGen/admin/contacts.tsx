import React, { Dispatch, SetStateAction } from 'react';
import {
  Box as ChakraBox,
  type BoxProps,
  forwardRef,
  Select,
  Grid,
} from '@chakra-ui/react';

import { Box } from '../primitives';

import { Contact } from './contact';
import { PollsAnswers } from './AdminSection';

// list of filtered contacts

interface ContactsProps extends BoxProps {
  contacts: PollsAnswers[];
  type: string;
  setTarget: Dispatch<SetStateAction<null | string>>;
  status?: string;
  setStatus: Dispatch<SetStateAction<undefined | string>>;
}

export const Contacts = forwardRef<ContactsProps, 'div'>(
  ({ type, contacts, status, setStatus, setTarget, ...rest }, ref) => {
    // const [value, setValue] = React.useState('');
    const handleChange = (event: any) => setStatus(event.target.value);
    return (
      <ChakraBox ref={ref} {...rest}>
        <Select value={status} onChange={handleChange}>
          <option>Pending</option>
          <option>Shortlist</option>
          <option>PaidLead</option>
          <option>Longlist</option>
          <option>Complete</option>
          <option>Rejected</option>
          <option>NoInfo</option>
        </Select>
        <Grid
          width="100%"
          gap="1rem"
          mt="1rem"
          gridTemplateColumns={[
            'repeat(auto-fit, minmax(120px, 1fr))',
            'repeat(auto-fit, minmax(230px, 1fr))',
          ]}
        >
          {contacts &&
            Object.values(contacts).map(contact => {
              if (status !== 'Pending' && contact?.shootPolls_adminStatus !== status)
                return null;
              if (
                status === 'Pending' &&
                // contact?.shootPolls_adminStatus !== 'Pending' &&
                contact?.shootPolls_adminStatus !== undefined
              ) {
                return null;
              }
              console.log(
                contact?.a_shootPollsName,
                contact?.id,
                contact?.shootPolls_adminStatus,
              );
              return (
                <Contact key={contact?.id} contact={contact} setTarget={setTarget} />
              );
            })}
        </Grid>
      </ChakraBox>
    );
  },
);

Contacts.displayName = 'Contacts';
