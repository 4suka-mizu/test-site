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
