//dates 

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toISOString())
console.log(typeof myDate)


// let myCreeatedDte = new Date(2023,0,23)
// let myCreeatedDte = new Date(2023,0,23,5,3)
// let myCreeatedDte = new Date("2023-01-14")
let myCreeatedDte = new Date("01-14-2023")
console.log(myCreeatedDte.toLocaleString())

//time stands

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreeatedDte.getTime())

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))