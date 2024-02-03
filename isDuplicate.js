

const numbers=[22,1,3,11,22,33,11,2,3,9,5,5]

function xDuplicate(array) {
    const newArray=[];
    for(const item of array){
        if (newArray.includes(item)===false) {
            newArray.push(item);
        }
    }
    return newArray;
}

const noneDuplicate= xDuplicate(numbers);
console.log(noneDuplicate);