
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCplqxLFMRSzmM58KN34k0_SkJq2vGnuaA",
      authDomain: "kwitter-70a9a.firebaseapp.com",
      projectId: "kwitter-70a9a",
      storageBucket: "kwitter-70a9a.appspot.com",
      messagingSenderId: "755622260343",
      appId: "1:755622260343:web:667636cc1299b327d16072"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
