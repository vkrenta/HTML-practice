let button1 = document.getElementById('btn1');
let button2 = document.getElementById('btn2');

let header = button2.parentNode.parentNode;
let body = header.parentNode;
let logo = body.childNodes[1].firstChild.nextSibling;
let nav = header.nextSibling.nextSibling;
let menuList = nav.lastChild.previousSibling;
let menuElement = document.createElement('a');
let palms = nav.nextSibling.nextSibling;
menuElement.textContent = 'Самозванець';
menuElement.style = 'cursor: pointer';

button1.addEventListener('click', () => {
    button2.style = 'display: block';
    button1.style = 'display: none';
    header.style.background = '';
    logo.style.color = '';
    nav.style.background = '';
    let text = menuList.firstChild;
    for (let i = 0; i < menuList.childElementCount; i++){
        text = text.nextSibling;
        text.style.color = '';
        text = text.nextSibling;
    }
    palms.style = '';
    menuList.removeChild(menuElement);
});

button2.addEventListener('click', () => {
    button1.style = 'display: block';
    button2.style = 'display: none';
    menuList.appendChild(menuElement);
    logo.style.color = 'white';
    header.style = 'background-color: rgb(18, 44, 52)';
    let text = menuList.firstChild;
    for (let i = 0; i < menuList.childElementCount; i++){
        text = text.nextSibling;
        text.style.color = 'white';
        text = text.nextSibling;
    }
    nav.style.background = 'rgb(11, 79, 108)';
    palms.style = 'background-image: url("sea.jpg")';
});