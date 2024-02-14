import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect,
    signInWithPopup, 
    GoogleAuthProvider
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCziWGN7dhttbSk2vI6FdkqIxVsupZU5cs",
  authDomain: "shiri-clothing-db.firebaseapp.com",
  projectId: "shiri-clothing-db",
  storageBucket: "shiri-clothing-db.appspot.com",
  messagingSenderId: "717063930362",
  appId: "1:717063930362:web:200040e5c717eeecb96443"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
 const userDocRef = doc(db, 'users', userAuth.uid);

 const userSnapshot = await getDoc(userDocRef); 
 

 if(!userSnapshot.exists()) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt  
        });
    } catch (error) {
    console.log('error creating user', error.message);
    }
 }

 return userDocRef;
};