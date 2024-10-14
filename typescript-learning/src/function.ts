function findSum(name: String, age: number, isLogin: boolean = false){
    return { 'name': name, 'age': age, 'isLogin': isLogin }
}

let user = ( name: String, age: number, isLogin: boolean = false ) => {}

console.log(findSum('Riyas', 23, true))
console.log(user('Riyas', 23, true))

export{}