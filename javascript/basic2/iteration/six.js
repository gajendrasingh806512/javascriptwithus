

//const coding =['js','rb','java','py']

// const values = coding.forEach((item) => {
//     //console.log(item)
//     return item
// })

// console.log(values)


const myNum =[1,2,3,4,5,6,7,8,9,10]
//  const newNums =myNum.filter((num) => {return num>4})

// const newNums =[]
// myNum.forEach((num) => {
//     if(num>4){
//         newNums.push(num)
//     }
    
// });

// console.log(newNums)

//seven file 

// const newNums = myNum.map((num) => {return num+10})

//chaining 
const newNums = myNum
            .map((num) => num*10)
            .map((num) => num+1)
            .filter((num) => num>=40)
console.log(newNums)
