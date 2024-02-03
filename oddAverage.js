//calculating the average of odd numbers of an array
console.log('==========calculating the average of odd numbers of an array==========');

const odd=[]
function averageOfOdd(numbers) {
    for(const number of numbers){
        if (number % 2===1) {
            odd.push(number)
        }
    }
    let sumOfOdd=0;
    for (const number of odd) {
        sumOfOdd=sumOfOdd+number;
    }
    const avgOfOdd=sumOfOdd/odd.length;
    return avgOfOdd;
}

const numbers=[22,42,11,11,11,22,11,42]; //insert your number in this array 

const avg= averageOfOdd(numbers);
console.log('the average of the odd numbers of the array is',avg)

//calculating the average of even numbers of an array
console.log('==========calculating the average of even numbers of an array==========');

const even=[]
function averageOfeven(numbers) {
    for(const number of numbers){
        if (number % 2===0) {
            even.push(number)
        }
    }
    let sumOfeven=0;
    for (const number of even) {
        sumOfeven=sumOfeven+number;
    }
    const avgOfeven=sumOfeven/even.length;
    return avgOfeven;
}

const numbers2=[42,42,11,11,11,42,11,42]; //insert your number in this array 

const avgEven= averageOfeven(numbers2);
console.log('the average of the Even numbers of the array is',avgEven)