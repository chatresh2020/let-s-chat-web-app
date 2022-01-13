



var firebaseConfig = {
  apiKey: "AIzaSyDSNufYhc_y6PVEb1hb5RMzjmhMDFuLHkE",
  authDomain: "lets-chat-883e6.firebaseapp.com",
  databaseURL: "https://lets-chat-883e6-default-rtdb.firebaseio.com",
  projectId: "lets-chat-883e6",
  storageBucket: "lets-chat-883e6.appspot.com",
  messagingSenderId: "337877435066",
  appId: "1:337877435066:web:7bb32712bb1405e0807883"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
