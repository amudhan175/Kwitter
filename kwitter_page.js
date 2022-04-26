const firebaseConfig = {
    apiKey: "AIzaSyDrEthaseqr0KjYpSKmR3P64kHwwHwMmeQ",
    authDomain: "kwitter-80531.firebaseapp.com",
    databaseURL: "https://kwitter-80531-default-rtdb.firebaseio.com",
    projectId: "kwitter-80531",
    storageBucket: "kwitter-80531.appspot.com",
    messagingSenderId: "945725248641",
    appId: "1:945725248641:web:b88f71d82c701ade8ba980",
    measurementId: "G-4PZCB5H2GS"
  };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
function Send(){
    message = document.getElementById("message_input").value;
    firebase.database().ref(room_name).push({
        name:room_names
        message:message
        like:0
    });
    document.getElementById("message_input").value= "";
}
//End code
 } });  }); }
getData();