



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

 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
 function addRoom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
   localStorage.setItem("room_name",room_name);
   window.location="kwitter_page.html";
 }
 function getData() 
 {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
 console.log("roomname-"+Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
 document.getElementById("output").innerHTML+=row;
       //End code
       });});}
 getData();
 function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
 }
