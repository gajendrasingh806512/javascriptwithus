const userEmail = "h@hitesh.ai"


if(userEmail){
    console.log("get user email")

}else{
    console.log("Don't have a user email")
}

//falsy values :-
//false, 0 ,-0 ,BigInt 0n, null , undefined , NaN

//truthy values :-
// true , "0" ,'false' , "  " ,[],{},funtion(){}

    const userArry = []
if(userArry.length ===0){
    console.log("array is empty")
}


const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty")
}

//Nullish Coalescing Operator (??):null underfined

let val1;
//val1 = 5 ?? 10
//val1 = null??10
//val1 = undefined??16
    val1 = null ?? 10 ??20



console.log(val1)

//Terniary Operator

// condition ? true :false
const iceTeaPrice = 100
iceTeaPrice >=80 ? console.log("less than 80") : console.log("more than 80")
