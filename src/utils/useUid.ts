import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { signIn } from './fireBaseCalls';
import { getFirebase } from './firebaseInit';

function useUid(source: string) {
  const [backUpUid, setBackupUid] = useState<string>();
  const [authUid, setAuthUid] = useState<string | undefined>(undefined);
  const { auth } = getFirebase();
  const [user, loading] = useAuthState(auth);
  console.log(user?.uid, loading);

  useEffect(() => {
    if (!loading && !user) signIn();
    onAuthStateChanged(auth, user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setAuthUid(user.uid);
      } else {
        // setUid(undefined);
      }
    });
    // console.log(auth, 'pulse');
  }, [auth, loading, user]);

  useEffect(() => {
    console.log('checking', backUpUid);
    if (backUpUid) return;
    setBackupUid('backupUid-' + source + new Date());
  }, [backUpUid, source]);

  const uid = authUid || backUpUid || 'uidError';

  // useEffect(() => {
  //   console.log('IDs:', uid, authUid, backUpUid);
  // }, [uid, authUid, backUpUid]);

  return uid;
}

export { useUid };
