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
function calAge(){
    let inAge = prompt("When you was born?","2000");
    let currentDate = new Date();
    let calAge = Number(currentDate.getFullYear()) - Number(inAge);
    alert("ยินดีด้วย นายอยู่ในประเทศนี้มา"+calAge+"ปีแล้ว");
}
function loadProfile(){
    const name = "kittichon";
    const province = "Krung Thep Maha Nakhon";
    document.getElementById("my-name").innerHTML = name;
    document.getElementById("my-province").innerHTML = province;
}