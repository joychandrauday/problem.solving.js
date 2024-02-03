/*
    *year % 400 == 0 || year % 100 != 0
    *&& 
    *year % 4 == 0
*/
function ISLP(year){
    if((year % 400 == 0) ||
       (year % 100 != 0) && 
       (year % 4 == 0)){
        return console.log('this is a leap year.');
    }else{
        // return console.log('this is not a leap year.');
    }
}
const yeAr = 2024;
const isLeapYear=ISLP(yeAr);
console.log(isLeapYear);