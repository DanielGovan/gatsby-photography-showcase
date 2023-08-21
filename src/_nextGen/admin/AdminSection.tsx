import React, { useEffect, useState } from 'react';

import { Flex } from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { GoogleLogin, userLogout } from '../../utils/fireBaseCalls';
import { Box } from '../primitives';
import { BodyHeader } from '../typography';
import { getFirebase } from '../../utils/firebaseInit';
import { useDataListener } from '../../utils/useDataListener';
import { Button } from '../button';

import { Contacts } from './contacts';
import { ContactDetails } from './contactDetails';

export type PollsAnswers = {
  a_shootPollsName: string;
  poll_availability: string[];
  poll_camerasMakeMe: string[];
  poll_canIStare: string;
  poll_duoShoots: string;
  poll_height: string;
  poll_ideas: string;
  poll_onArrival: string[];
  poll_picsVibe: string[];
  poll_posingStyle: string;
  poll_prevShoots: string;
  poll_retouching: string;
  poll_roomVibe: string[];
  poll_sharing: string;
  poll_shootAim: string[];
  poll_shootType: string[];
  poll_skinAmount: string[];
  poll_soundTrack: string[];
  poll_starOfTheShow: string[];
  poll_timeToStudio: string;
  poll_wearing: string[];
  shootPollsContact_instagram: string;
  shootPollsContact_twitter: string;
  shootPollsContact_otherTwitter: string;
  timestamp: string;
  id?: string;
  shootPolls_adminNotes?: string;
  shootPolls_adminStatus?: string;
};

const AdminSection = () => {
  const { auth } = getFirebase();
  const [user, loading] = useAuthState(auth);
  const [target, setTarget] = useState<null | string>(null);
  const [status, setStatus] = useState<undefined | string>(undefined);
  const [contacts, setContacts] = useState<any>();
  const loadedContacts = useDataListener('contacts') as unknown as PollsAnswers[];

  useEffect(() => {
    if (!loadedContacts) return;
    const indexedContacts = Object.entries(loadedContacts).map(([key, value]) => {
      return { id: key, ...value };
    });
    setContacts(indexedContacts);
  }, [loadedContacts]);

  return (
    <Flex justifyContent="center" flexDirection="column" width="100%">
      <BodyHeader>ADMIN</BodyHeader>

      {!user || user.isAnonymous ? (
        <Button onClick={GoogleLogin}>Login</Button>
      ) : (
        <Button onClick={userLogout}>Logout</Button>
      )}
      {user?.email === 'daniel.govan@gmail.com' && (
        <Box mt="0.5rem" mb="5rem">
          {target && contacts && (
            <ContactDetails setTarget={setTarget} contacts={contacts} target={target} />
          )}
          {contacts && !target && (
            <Contacts
              setTarget={setTarget}
              status={status}
              setStatus={setStatus}
              contacts={contacts}
              type="all"
            />
          )}
        </Box>
      )}
    </Flex>
  );
};

export default AdminSection;
