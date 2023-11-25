//singleton
//Object.create

//object literals

const mySym =Symbol("key1")


const JsUser = {

    name: "hitesh",
    "full name":"gajendrasingh",
    [mySym]:"myKey1",
    age:18,
    location:"jaipur",
    email:"hitesh@googgle.com",
    isLoggedIn:false,
    lastLogininDays:["Monday","Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())


