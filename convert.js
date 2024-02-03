// conversion of several parameter
console.log('==========inch to feet==========')

function inchToFeet(inch) {
    const feet=inch/12;
    return feet;
}

const height=72; //insert your height here 

const heightFt = inchToFeet(height);
console.log('the height is',heightFt);

//feet ,inch
console.log('==============================')
function inchToFeetSep(inch) {
    const feetFraction=inch/12;
    const feet=parseInt(feetFraction);
    const fractionFeet=inch%12;
    return [feet,fractionFeet];
}

const height2= 71; //Enter your height here.

const heightFt2=inchToFeetSep(height2);
console.log('the height is',heightFt2[0],'feet',heightFt2[1],'inch.');