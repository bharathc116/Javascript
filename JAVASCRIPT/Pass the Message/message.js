const messageInput = document.getElementById("message-input");

function getmessage(){
   document.getElementById("message-output").innerHTML = messageInput.value;
   messageInput.value = "";

}