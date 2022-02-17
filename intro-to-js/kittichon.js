// create h1 text
const myname = document.createElement('h1');
myname.setAttribute("id","myname");
const myname_txt = document.createTextNode('My name is');
myname.appendChild(myname_txt);
let body = document.getElementsByTagName('body')[0];
body.appendChild(myname);

// button Ask my name
const btnAskname = document.createElement('button');
const btnAskTxt = document.createTextNode('Ask My Name');
btnAskname.appendChild(btnAskTxt);
btnAskname.setAttribute("onclick","askMyName()");
body.appendChild(btnAskname);

// button Hello World
const btnHello = document.createElement('button');
const btnHelloTxt = document.createTextNode('Hello World');
btnHello.appendChild(btnHelloTxt);
btnHello.setAttribute("onclick","helloWorld()");
body.appendChild(btnHello);

// function
function askMyName(){
    const name = prompt("What is your name?");
    if (name != null){
        document.getElementById("myname").innerHTML = "My name is " + name;
    }
}

function helloWorld(){
    const h1message = document.getElementById("myname").innerHTML;
    alert(h1message + " โซ่เถอะนะน้อง ทองมันแพง");
}

//style
body.setAttribute("style","width:80%;margin:auto;display:flex;justify-content:center;flex-direction:column;align-items:cetner;text-align:center;background-color:#27B5B8;")
btnAskname.setAttribute("style","height:100px; margin-bottom:15px; background-color:#EBCA1A; font-size:18px");
btnHello.setAttribute("style","height:100px; background-color:#EBCA1A; font-size:18px");
myname.setAttribute("style","color:white;")