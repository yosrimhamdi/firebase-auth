const firebaseConfig = {
  apiKey: 'AIzaSyA-KzSSUmeISZtDwVCl-MPl8374udixk90',
  authDomain: 'test-f0668.firebaseapp.com',
  projectId: 'test-f0668',
  storageBucket: 'test-f0668.appspot.com',
  messagingSenderId: '194026026564',
  appId: '1:194026026564:web:f9dc5626c7c7583efd6e11',
};

firebase.initializeApp(firebaseConfig);

async function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();

  await firebase.auth().signInWithPopup(provider);
}

async function signOut() {
  await firebase.auth().signOut();
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('still logged in!!');
    console.log(user);
  } else {
    console.log('out');
  }
});
