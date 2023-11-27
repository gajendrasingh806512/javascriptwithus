//Immediately Invoked function Expressions(IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`)
})();

( (name) => {
    //UNNAMED IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('hitesh')