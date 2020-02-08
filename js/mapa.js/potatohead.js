
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA6Wly0NT5qwNhrhVfeyP-EqCvWHFtvgZw",
    authDomain: "crybaby-bd423.firebaseapp.com",
    databaseURL: "https://crybaby-bd423.firebaseio.com",
    projectId: "crybaby-bd423",
    storageBucket: "crybaby-bd423.appspot.com",
    messagingSenderId: "208364862091",
    appId: "1:208364862091:web:4507c0e376b5a0f8e5f28e",
    measurementId: "G-428ZHHEGRR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var aplicacion={
  registro : function() {
 var correo = document.getElementById('email').value;
 var password = document.getElementById('pass').value;

 firebase.auth().createUserWithEmailAndPassword(correo, password)
 .catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorMessage)
})
},
 conect : function(){
  var correo = document.getElementById('email').value;
  var password = document.getElementById('pass').value;
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // [START_EXCLUDE]
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
  document.getElementById('quickstart-sign-in').disabled = false;
  // [END_EXCLUDE]
});

 }
 ,

obser : function(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
      document.getElementById('user').innerHTML=email;
    } else {
      // User is signed out.
      // ...
      document.getElementById('user').innerHTML='desconectado';
    }
  });
},
deslogeo : function()
{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  })
}
}
aplicacion.obser();