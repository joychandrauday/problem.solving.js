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
    

//TASK 05
console.log('==========Find the lowest number in the array below.==========')

function findLowest(heights) {
    let lowHeight=heights[0];
    for(const height of heights){
        if (height < lowHeight) {
            lowHeight=height;
        }
    }
    return lowHeight;
}

const heights2 = [167, 190, 120, 165, 137,111]; //enter your height array

const lowestHeight=findLowest(heights2);
console.log('the lowest height is',lowestHeight);

//TASK 06
console.log('==========Find the friend with the smallest name.==========')

function smallestName(names) {
    let smName=names[0];
    for (let i = 1; i < names.length; i++) {
        if (smName.length>names[i].length) {
            smName = names[i];
        }
    }
    return smName;
}

const namesArray = ['rahim', 'robin', 'rafi', 'ron', 'rashed','a'];

const smallName=smallestName(namesArray);
console.log('the smallest name is',smallName);

//TASK 07
console.log('==========Your task is to calculate the total budget required to buy electronics:==========')

function calculateElectronicsBudget(reqLaptop,reqTablet,reqMobile) {
    //unit price
    const indiLaptop = 35000;
    const indiTablet = 15000;
    const indiMobile = 20000;

    const totalLaptopPrice=indiLaptop*reqLaptop;
    const totalTabletPrice=indiTablet*reqTablet;
    const totalMobilePrice=indiMobile*reqMobile;
    
    const totalPrice=totalLaptopPrice+totalMobilePrice+totalTabletPrice;
    
    return totalPrice;
}

const totalBudget= calculateElectronicsBudget(1,5,1)
console.log('the total budget is',totalBudget);


//TASK 07
console.log('==========average of phone price==========')

function priceAverage(phones){
    let averagePrice=0;
    let sumPrice=0;
    for(const phone of phones){
        sumPrice+=phone.price;
    }
    averagePrice=sumPrice/phones.length;
    return averagePrice;
}

const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

const averagePrice=priceAverage(phones);
console.log('the average price of the phone prices is',parseInt(averagePrice));