


function sayMyName(){

    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    console.log("H");
    
}

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)

// }

function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result

return number1+number2

}

const result = addTwoNumbers(3,5)
//console.log("Result:",result)


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in `
}

//console.log(loginUserMessage("asssss"))

function calculateCartPrice(...num1){
    return num1

}

//console.log(calculateCartPrice(200,400,500))

const user = {
    username: "hitesh",
    price:190
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function retunSecondValue(getArray){
    return getArray[1]
}

//console.log(retunSecondValue(myNewArray))
console.log(retunSecondValue([100,452,536,444]))