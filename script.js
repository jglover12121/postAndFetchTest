const roomCodeInput = document.getElementById("roomCodeInput")

const oriHref = window.location.href;

console.log(oriHref);
let roomCode = toString(roomCodeInput.value);

document.getElementById("setRoom").addEventListener("click", ()=>{
  roomCode = roomCodeInput.value;
  let newRoomHref = oriHref + roomCode;
  console.log(oriHref);
  console.log(newRoomHref);
})
document.getElementById("leaveRoom").addEventListener("click", ()=>{
  window.location.href = oriHref;
})