let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/peace-symbol.png') {
      myImage.setAttribute ('src','images/emoji.png');
    } else {
      myImage.setAttribute ('src','images/peace-symbol.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'PEACE AND LOVE, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'PEACE AND LOVE' + storedName;
}
    
myButton.onclick = function() {
  setUserName();
}
