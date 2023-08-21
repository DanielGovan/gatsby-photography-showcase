import { GoogleAuthProvider, signInAnonymously, signInWithPopup } from 'firebase/auth';
import {
  doc,
  setDoc,
  serverTimestamp,
  onSnapshot,
  query,
  collection,
  where,
} from 'firebase/firestore';

// Passes the init etc here
import { getFirebase } from './firebaseInit';
const { firestore, auth } = getFirebase();

// Unused: an example of a single getDoc tho?
// export const getPollResults = async (pollName: string) => {
//   let response = {};
//   const docRef = doc(firestore, 'polls', pollName);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     response = { ...response, ...docSnap.data() };
//     // console.log('Document data:', pollName, docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     // console.log('No document named', pollName);
//   }
//   return response;
// };

// TODO: must be a better way of doing the below, starting with an array and ending with an object

export const getContacts = (pollName: any, callback: any) => {
  return onSnapshot(
    query(collection(firestore, pollName), where('a_shootPollsName', '!=', '')),
    querySnapshot => {
      let res = {};
      const rawData = querySnapshot.docs.map(doc => ({
        [doc.id]: {
          ...doc.data(),
        },
      }));
      for (const elem of rawData) {
        res = {
          ...res,
          ...elem,
        };
      }
      callback(res);
    },
  );
};

export const getPolls = (pollName: any, callback: any) => {
  return onSnapshot(query(collection(firestore, pollName)), querySnapshot => {
    let res = {};
    const rawData = querySnapshot.docs.map(doc => ({
      [doc.id]: {
        ...doc.data(),
      },
    }));
    for (const elem of rawData) {
      res = {
        ...res,
        ...elem,
      };
    }
    callback(res);
  });
};

export const getData = (collectionName: any, callback: any) => {
  return onSnapshot(query(collection(firestore, collectionName)), querySnapshot => {
    let res = {};
    const firebaseData = querySnapshot.docs.map(doc => ({
      [doc.id]: {
        ...doc.data(),
      },
    }));
    for (const elem of firebaseData) {
      res = {
        ...res,
        ...elem,
      };
    }
    console.log(res, firebaseData);
    callback(res);
  });
};

export const signIn = async () => {
  signInAnonymously(auth)
    .then(() => {})
    .catch(exception => {
      const errorCode = exception.code;
      const errorMessage = exception.message;
      console.log('signin fail', ':', errorCode, ':', errorMessage);
    });
};

const googleProvider = new GoogleAuthProvider();
export const GoogleLogin = async () => {
  // const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
  signInWithPopup(auth, googleProvider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch(exception => {
      // Handle Errors here.
      const errorCode = exception.code;
      const errorMessage = exception.message;
      // The email of the user's account used.
      const email = exception.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(exception);
      console.log('googleLogin failed', errorCode, errorMessage, email, credential);
      // ...
    });
  // try {
  //   const result = await signInWithPopup(auth, googleProvider);

  //   // I don't think this works as expected.
  //   // .then(result => {
  //   //   let previousUser = auth.currentUser;
  //   //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   //   // console.log(result, credential, auth.currentUser);
  //   //   if (previousUser && credential) {
  //   //     linkWithCredential(previousUser, credential)
  //   //       .then(usercred => {
  //   //         const user = usercred.user;
  //   //         console.log('Anonymous account successfully upgraded', user);
  //   //       })
  //   //       .catch(exception => {
  //   //         console.log('Error upgrading anonymous account', exception);
  //   //       });
  //   //   }
  //   // });
  // } catch (exception) {
  //   console.log(exception);
  // }
};

export const userLogout = () => {
  auth.signOut();
};

export const deleteMe = () => {
  const lol = auth.currentUser?.delete;
  if (lol) lol();
};

export const stripEmpty = (object: Object) => {
  return Object.fromEntries(
    Object.entries(object).filter(([_, v]) =>
      Array.isArray(v) ? v.length > 0 : v !== '' && v !== null,
    ),
  );
};

// TODO: on form load check the docs to see if they've filled it in before. Say "Hi *name*! Not you? Delete me."
// But not until we can log in properly!

// SUBMITS CONTACT FORM =======
export const addData = async (data: any, uid?: string) => {
  const strippedData = stripEmpty(data);
  let backupUid = `noId-${new Date()}`;

  const target = uid || backupUid;

  const contactsRef = doc(firestore, 'contacts', target);

  //each poll answer seperated and added to the pile...
  for (const [key, value] of Object.entries(strippedData)) {
    if (key.includes('poll_')) {
      const pollEntry = { [target]: value };
      setDoc(doc(firestore, 'polls', key), pollEntry, { merge: true });
    }
  }

  setDoc(contactsRef, { timestamp: serverTimestamp(), ...strippedData }, { merge: true });
};
