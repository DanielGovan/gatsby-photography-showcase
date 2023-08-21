import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Box as ChakraBox,
  type BoxProps,
  forwardRef,
  Button,
  Box,
} from '@chakra-ui/react';

import { SmallHeader } from '../typography';
import { shootQuestions } from '../forms/PollData';
import { MiniDetails } from '../forms/MiniDetails';

import { PollsAnswers } from './AdminSection';

// list of filtered contacts

interface ContactDetailsProps extends BoxProps {
  contacts: PollsAnswers[];
  target: string;
  setTarget: Dispatch<SetStateAction<null | string>>;
}

export const ContactDetails = forwardRef<ContactDetailsProps, 'div'>(
  ({ target, contacts, setTarget, ...rest }, ref) => {
    const [details, setDetails] = useState<any>();

    useEffect(() => {
      if (!contacts || !target) {
        setDetails(null);
        return;
      }

      const targetDetails = Object.values(contacts).find(
        contact => contact.id === target,
      );
      if (!targetDetails) {
        setDetails(null);
        return;
      }

      setDetails(targetDetails);
    }, [contacts, target]);

    return (
      <ChakraBox ref={ref} {...rest}>
        <Button onClick={() => setTarget(null)}>Back</Button>
        <SmallHeader>{details?.a_shootPollsName}</SmallHeader>
        {shootQuestions.map(question => {
          const result = details ? details[`poll_${question.fieldName}`] : '';
          if (typeof result === 'string') {
            return (
              <Box my="0.5rem" key={question.fieldName}>
                <Box fontWeight="700">{question.labelText}</Box>
                <Box>{result}</Box>
              </Box>
            );
          }
          return (
            <Box my="0.5rem" key={question.fieldName}>
              <Box fontWeight="700">{question.labelText}</Box>
              {result && result.map((item: any) => <Box key={item}>{item}</Box>)}
            </Box>
          );
        })}
        {details && (
          <MiniDetails
            uid={details?.id}
            notes={details[`shootPolls_adminNotes`] || ''}
            status={details[`shootPolls_adminStatus`] || ''}
          />
        )}
      </ChakraBox>
    );
  },
);

ContactDetails.displayName = 'ContactDetails';
