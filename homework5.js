// ------------1----------
function cheke(arr){
    if(arr.includes(7)){
        return 'Boom!'
    }
    else{
        return 'Their is no 7 in the array'
    }
}
const array=[1,2,3,4,5,6,7]
console.log(cheke(array));
// ------------2----------
function find(jew){
    jew.sort((a,b)=>b.price-a.price)
    const mostEx=jew[0]
    return `The most expensive one is the ${mostEx.name}`
}
console.log(find ([
    {name:"Diamond Earrings",price:980}
    {name:"Gold Watch",price:250}
]
));
