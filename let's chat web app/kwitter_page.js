
var firebaseConfig = {
      apiKey: "AIzaSyB9ix3aQ7U1sMR1TFFNypMj6oTRsZgSggM",
       authDomain: "classtest-6a91c.firebaseapp.com",
       databaseURL: "https://classtest-6a91c-default-rtdb.firebaseio.com",
       projectId: "classtest-6a91c",
       storageBucket: "classtest-6a91c.appspot.com",
       messagingSenderId: "60745453406",
       appId: "1:60745453406:web:08999fd3c82f11ae2549cf"
     };
     
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name=localStorage.getItem("user_name");
     room_name=localStorage.getItem("room_name");
     function send(){
           msg=document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
                 name:user_name,
                 message:msg,
                 like:0
                 
           });
           document.getElementById("msg").value="";


     }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}