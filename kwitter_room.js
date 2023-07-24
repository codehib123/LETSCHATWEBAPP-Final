

var firebaseConfig = {
      apiKey: "AIzaSyDcqvysjE_J9FSo3lJ0PF33Y5YDN3-tkAY",
      authDomain: "kwitter-f5de4.firebaseapp.com",
      databaseURL: "https://kwitter-f5de4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5de4",
      storageBucket: "kwitter-f5de4.appspot.com",
      messagingSenderId: "784066807392",
      appId: "1:784066807392:web:4e8cdd8304cbb836eea505"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
       } );

       localStorage.setItem("room_name", room_name);

       window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location = "index.html"
}