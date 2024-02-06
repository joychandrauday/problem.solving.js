function woodNeed(chairQ,bedQ,tableQ) {
    const indiChairWood=3;
    const indiBedWood=15;
    const indiTableWood=5;
    
    const chairTotalWood=chairQ*indiChairWood;
    const bedTotalWood=bedQ*indiBedWood;
    const tableTotalWood=tableQ*indiTableWood;

    const totalWoodNeed=chairTotalWood+bedTotalWood+tableTotalWood;
    return totalWoodNeed;
}

const tWoodNeed=woodNeed(5,2,3);
console.log('total wood needed',tWoodNeed,'cft.');


console.log('==================================')



function minimumPrice(prices) {
    let miniMum=prices[0];
    for(const price of prices){
        if (price < miniMum) {
            miniMum=price;
        }
    }
    return miniMum;
}


const phonePrice=[12000,12100,30000,21200,33000,12200,30000]
const miniMum=minimumPrice(phonePrice);
console.log('the cheapest price is ',miniMum);


console.log('==================================')


const products=[
    { name:'charger', price:700 },
    { name:'watch', price:1700 },
    { name:'sunglass' , price:400 },
    { name:'crackers' , price:100 },
    { name:'ring' , price:300 }
]   
function totalPrice(products) {
    let totalSum=0;
    for( const product of products){
        totalSum=totalSum+product.price
    }
    return totalSum
}

const cartTotal=totalPrice(products);
console.log('you have to pay total',cartTotal);

console.log('==================================')


const products2=[
    { name:'charger', price:700 ,quantity:1},
    { name:'watch', price:1700 ,quantity:2},
    { name:'sunglass' , price:400 ,quantity:2},
    { name:'crackers' , price:100 ,quantity:4},
    { name:'ring' , price:300 ,quantity:2}
]   

function totalPay(products2) {
    let totalSum=0
    for(const product2 of products2){
        totalSum=totalSum+ (product2.price*product2.quantity)
    }
    return totalSum;
}
const totalPrice2=totalPay(products2);
console.log('you have to pay total',totalPrice2);