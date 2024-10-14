// const str = 'hEllo world MAdhav rIyas'

// function getStr(str){

//     let arr = "aeiouAEIOU"

//     function rec(len, count = 0){
//         if(len < 0){
//             return count
//         }

//         if(arr.includes(str[len].toLowerCase())){
//             count++
//         }
        
//         return rec(len - 1, count)
//     }

//     return rec(str.length - 1)
// }

// console.log('Vowels count: ',getStr(str))




// const str = "hellllllllllooooooyyy"

// function longStr(str){
//     let obj = {}
//     let max = {val: 0, s: ''}

//     for(let i = 0; i < str.length; i++){
//         if(!obj[str[i]]){
//             obj[str[i]] = Math.abs(str.indexOf(str[i]) - str.lastIndexOf(str[i]) - 1)
//         }
//     }
//     for(let key in obj){
//         if(obj[key] > max.val){
//             max.val = obj[key]
//             max.s = key
//         }
//     }

//     let longS = str.slice(str.indexOf(max.s), str.lastIndexOf(max.s))

//     return longS
// }

// console.log('longStr: ',longStr(str))





// const str = 'hello riyas welcome to brototype'

// function cap(str){
//     let s = ''

//     for(let i = 0; i < str.length; i++){
//         if(i === 0 || str[i - 1] === ' '){
//             let newStr = String.fromCharCode(str.charCodeAt(i) - 32)
//             s += newStr
//         }else{
//             s += str[i]
//         }
//     }
//     return s
// }
// console.log(cap(str))

let map = [
    {'name' : 'riyas', 'age' : 10},
    {'name' : 'kiran', 'age' : 34},
    {'name' : 'akil', 'age' : 12},
    {'name' : 'liston', 'age' : 23},
    {'name' : 'sanooj', 'age' : 97},
]

function getVal(arr){
    for(let val of arr){
        
    }
}

getVal(map)
//{youngest:['name],oldest : ['name]}