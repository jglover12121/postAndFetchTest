const roomCodeInput = document.getElementById("roomCodeInput")

const oriHref = window.location.href;

console.log(oriHref);
let roomCode = toString(roomCodeInput.value);

document.getElementById("setRoom").addEventListener("click", ()=>{
  roomCode = toString(roomCodeInput.value);
  window.location.href = toString(toString(oriHref) + roomCode);
})
document.getElementById("leaveRoom").addEventListener("click", ()=>{
  window.location.href = oriHref;
})