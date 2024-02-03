//TASK 01
// Write a function to convert temperature from Celsius to Fahrenheit.
console.log('==========Write a function to convert temperature from Celsius to Fahrenheit.==========')
function CelsToFer(deggree) {
    const farenheit=deggree*9/5+32;
    return farenheit;
}
const temperature=10;//enter your celcius temperature

const farenheit= CelsToFer(temperature);
console.log(temperature,'degree celcius is equivalent to',farenheit,'degree farenheit.')


//TASK 02
console.log('==========You are given an array of numbers. Count how many times the a number is repeated in the array.==========')


function findingAnumber(number,numArray) {
    let countNum=0;
    const findingNum=number;
    
    for (let i = 0; i < numArray.length; i++) {
        const indiNum = numArray[i];
        if (findingNum===indiNum) {
            countNum=countNum+1;
        }
    }
    
    return countNum;
}

const numbers = [5,6,11,12,98,5,11,11,11,11];
const numberToFind=22;
const theNumber=findingAnumber(numberToFind,numbers)
console.log('there are',theNumber,numberToFind,'in the string',numbers);


//TASK 03
console.log('==========Write a function to count the number of vowels in a string.==========')

function countVowel(word) {
    
    let vowelCount=0;
    
    for (let i = 0; i < word.length; i++) {
        const indiLetter= word[i];
        if (indiLetter==='a' || indiLetter==='e'|| indiLetter==='i'|| indiLetter==='o'|| indiLetter==='u') {
            vowelCount++
        }
        
    }
    return vowelCount;
}

const statement='i am a developer.'; //enter your statement to find the vowel numbers.
const vowelNum=countVowel(statement);
console.log('there are',vowelNum,'vowel in the statement =',statement,'=')

//TASK 04
console.log('==========Write a function to find the longest word in a given string.==========')

function longestWord(sentence) {
    let indiWord = sentence.split(' ');
    // console.log(indiWord);
    let largest="";
    for (let i = 0; i < indiWord.length; i++) {
        if (indiWord[i].length > largest.length) {
            largest=indiWord[i];
        }
    }
    return largest;

}

const statement2='I am learning Programming to become a programmer'
const longWord= longestWord(statement2);
console.log('the largest word of the string **',statement2,'** is',longWord);
