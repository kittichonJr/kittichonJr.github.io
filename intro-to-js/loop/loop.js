// const students = [
//     ['เต้','โจน','ปิง'],
//     ['ภัค','ป่าน','เบ๊บ']
// ]


// for (row=0;row<students.length;row+=1){
//     let catText="";
//     for (col=0;col<students[row].length;col+=1){
//         catText += students[row][col];
//     }
//     console.log(catText)
// }

// const friends =['คุณเดี่ยว','คุณพีร์','คุณจี้','คุณป๊อป']

// friends.forEach((friend)=>{
//     console.log(`${friend} is genius`)
// })

// const teams = ['หว้า','จี้','เค้ก']

// const mapKeep = teams.map((team,i)=>{
//     return `${team} JSD#1`
// })
// console.log(mapKeep)

// console.log(teams.map(team=> {return `${team} JSD#1`}))

// const marryFunction = () => {
//     let person = "Hiang"
//     const sentence = "will marry soon"
//     let fullSentence = `Congrat, ${person} ${sentence}`
//     console.log("Hi my name is " + person);
//     console.log(fullSentence);
//     console.log(fullSentence);
//     console.log(fullSentence);
//     console.log(fullSentence);
//     console.log(fullSentence);
//     person = "Tim"
//     fullSentence = `Congrat, ${person} ${sentence}`
//     console.log("Hi my name is " + person);
//     console.log(fullSentence);
//     console.log(fullSentence);
//   }
  
//   marryFunction();

//Loop 
//Exercise#1
console.log("++++++++++++++++++++++++++++++++++")
//Part 1
console.log("Excercise#1")
console.log("++++++++++++++++++++++++++++++++++")
console.log("Part 1")
let people =['Sofia','David','Juan']
console.log(people.join(' '))
//Part2
console.log("Part 2")
people.push('Sara')
people.push('Augustin')
console.log(people.join(' '))
//Part3
console.log("Part 3")
people.splice(2,0,'Renata')
people.push('Elena')
console.log(people.join(' '))

//Exercise#2
console.log("++++++++++++++++++++++++++++++++++")
console.log("Excercise#2")
console.log("++++++++++++++++++++++++++++++++++")
for(let row=0;row<=4;row++){
    let star="";
    for (let col=row;col>=0;col--){
        star+='* '
    }
    console.log(star)
}

//Exercise#3
//part3.1
console.log("++++++++++++++++++++++++++++++++++")
console.log("Excercise#3")
console.log("++++++++++++++++++++++++++++++++++")
console.log("Part 3.1")
let xValue=5;
while(xValue!==0){
    xValue-=0.5;
    console.log(xValue)
}
//part3.2
console.log("Part 3.2")
let oddNumber=[];
let materialNumber=null;
while(materialNumber<=100){
    let odd=materialNumber %2;
    if(odd===0 && materialNumber != null){
        oddNumber.push(materialNumber)
    }
    materialNumber+=1
}
console.log(oddNumber)

//Part3.3
console.log("Part 3.3")
const printNBrackets = (n)=>{
    let square=[];
   for(let round=1;round<=n;round++){
       square.splice(round-1,0,`[${round}]`)
   }
    return square.join(' ')
}
console.log(printNBrackets(10))

//Part3.4
console.log("Part 3.4")
const sumPositive=(n)=>{
    let sum=0;
    for(let count=n;count>=0;count--){
        sum += count;
    }
    return sum
}
console.log(sumPositive(5))

//Challenge
console.log("++++++++++++++++++++++++++++++++++")
console.log("Challenge")
console.log("++++++++++++++++++++++++++++++++++")
const isPalindrome = (text)=>{
    let palinText="";
    for(let step=text.length;step>=0;step--){
        palinText += text.charAt(step)
    }
    return (text===palinText)?true:false
}
console.log("Is '22022022' Palindrome?")
console.log(isPalindrome("22022022"))