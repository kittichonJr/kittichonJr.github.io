// Exercise 1
// Part 1 : Intersection Function

const intersection = (array1, array2) => {
    let sameText="None";
    array1.forEach((text,index)=>{
        if (text == array2[index]){
            sameText = text
        }
    })
    return sameText
}
console.log(intersection(['nun', 'ink', 'oat'], ['nun', 'tim'])) 

// Part 2 : Get Word Length Function

const getWordLength = (wordArray) =>{
    let nameLength=[];
    wordArray.forEach((text)=>{
        nameLength.push(text.length);
    })
    return nameLength
}
console.log(getWordLength(['nun', 'inkna', 'oatkrub']))

//Exercise 2
const numberRange = (number)=>{
    if (number < 0){
        return `${number} is less than 0`
    }
    if (number <=25){
        return `${number} is between 0 and 25`
    }
    if(number <=100){
        return `${number} is between 26 and 100`
    }else{
        return `${number} is greater than 100`
    }
}

console.log(numberRange(25))
console.log(numberRange(75))
console.log(numberRange(125))
console.log(numberRange(-25))

//Challenge
const chopString = (str,numOfChar)=>{
    let trimText = str.trim();
    let splitText = trimText.split(' ')
    let result=[] ;
    splitText = splitText.join("")
    for(let round=0;round<splitText.length;round+=numOfChar){ // round will leap the text we had pushed
        result.push(splitText.slice(round,round+numOfChar))
    }
    return result
}
console.log(chopString("stay hungry, stay foolish", 1) )
console.log(chopString("stay hungry, stay foolish", 2) )
console.log(chopString("stay hungry, stay foolish", 3) )
console.log(chopString("stay hungry, stay foolish", 4) )


