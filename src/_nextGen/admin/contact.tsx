import React, { Dispatch, SetStateAction } from 'react';
import { Box as ChakraBox, type BoxProps, forwardRef, Heading } from '@chakra-ui/react';

import { Box } from '../primitives';
// import { PollQuestionProps } from '../forms/PollQuestion';

import { PollsAnswers } from './AdminSection';

interface contactProps extends BoxProps {
  contact: PollsAnswers;
  setTarget: Dispatch<SetStateAction<null | string>>;
}

// if no first question, return

export const Contact = forwardRef<contactProps, 'div'>(
  ({ contact, setTarget, ...rest }, ref) => {
    let hword = false;
    let nude = false;
    let shy = false;
    let distant = false;
    let far = false;
    let cash = contact?.poll_shootType?.some(v => v.includes('(£££)'))
      ? '£££'
      : contact?.poll_shootType?.some(v => v.includes('(££)'))
      ? '££'
      : contact?.poll_shootType?.some(v => v.includes('(£)'))
      ? '£'
      : '';
    if (
      contact?.poll_roomVibe?.includes('Flirty') &&
      contact?.poll_skinAmount?.includes('nude (erotic)')
    ) {
      hword = true;
    }
    if (
      contact?.poll_camerasMakeMe?.includes('nervous') &&
      !contact?.poll_roomVibe?.includes('Flirty') &&
      !contact?.poll_skinAmount?.some(v => v.includes('nude'))
    ) {
      shy = true;
    }
    if (contact?.poll_skinAmount?.some(v => v.includes('nude'))) {
      nude = true;
    }
    if (contact?.poll_timeToStudio === 'Far :-(') {
      far = true;
    }
    if (
      contact?.poll_timeToStudio ===
      ('I visit sometimes?' || 'Give me an excuse to visit!')
    ) {
      distant = true;
    }

    return (
      <ChakraBox ref={ref} {...rest}>
        <Box mt="0.5rem">
          <Heading onClick={() => setTarget(contact.id || '')} size="sm">
            {contact?.a_shootPollsName}
          </Heading>
          {contact?.shootPolls_adminNotes && contact?.shootPolls_adminNotes}
          {hword && <> (H) </>}
          {shy && <> (S) </>}
          {nude && <> (N) </>}
          {far && <> (F) </>}
          {distant && <> (D) </>}
          {cash && <> ({cash}) </>}
        </Box>
        {contact?.shootPollsContact_instagram && (
          <Box>
            <a
              href={`https://www.instagram.com/${contact.shootPollsContact_instagram.replace(
                '@',
                '',
              )}`}
            >
              IG: {contact.shootPollsContact_instagram.replace('@', '')}
            </a>
          </Box>
        )}
        {contact?.shootPollsContact_twitter && (
          <Box>
            <a
              href={`https://www.twitter.com/${contact.shootPollsContact_twitter.replace(
                '@',
                '',
              )}`}
            >
              TW: {contact.shootPollsContact_twitter.replace('@', '')}
            </a>
          </Box>
        )}
        {contact?.shootPollsContact_otherTwitter && (
          <Box>
            <a
              href={`https://www.twitter.com/${contact.shootPollsContact_otherTwitter.replace(
                '@',
                '',
              )}`}
            >
              TW2: {contact.shootPollsContact_otherTwitter.replace('@', '')}
            </a>
          </Box>
        )}
      </ChakraBox>
    );
  },
);

Contact.displayName = 'Contact';
