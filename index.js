// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA60QCvDsGgRpR8zfTwTCp85KHmLzVbRBI",
  authDomain: "customerservicechat-c0ad4.firebaseapp.com",
  databaseURL: "https://customerservicechat-c0ad4.firebaseio.com",
  projectId: "customerservicechat-c0ad4",
  storageBucket: "customerservicechat-c0ad4.appspot.com",
  messagingSenderId: "555602259054",
  appId: "1:555602259054:web:c4778c49e87b7c5e7c4a7f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Locally stored lobbyid and userName to use later on.
var lobbyid = "";
var userName = "";

//Create Chat Lobby Function, connected to id createLobby button.

//This function tests if app is working and connected to Firebase.
function Test() {
  console.log("Submit Button pressed, connected to HTML");
  firebase
    .database()
    .ref("hi")
    .set("there");
}

//Functions creates a Lobby and saves lobbyid and username.
function createLobby() {
  userName = $("#username").val();
  let lobbyRef = firebase
    .database()
    .ref("lobby")
    .push();
  lobbyRef.set({ user: userName });
  lobbyid = lobbyRef.key;
  console.log("Lobby " + lobbyRef.key + " created.");
  //Go into created lobby.
  displayLobby();
}

//Re-renders screen to show created lobby.
function displayLobby() {
  console.log("Should re-render to chat screen.");
  document.getElementById("initScreen").style.display = "none";
  document.getElementById("lobbyScreen").style.display = "";
}

//Send message given into the current lobby.
function sndMsg() {
  let message = $("#message").val();
  console.log(message);
  console.log(userName);
  let messageRef = firebase
    .database()
    .ref("lobby")
    .child(lobbyid)
    .push({
      user: userName,
      message: message
    });
  }
