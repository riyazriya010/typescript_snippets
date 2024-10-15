let score: string | number

score = 12

score = '55'


type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let user1: User | Admin = {name: 'Riyas', id: 153}
user1 = {username: 'Riyas', id:235}


function getDbId(id: number | string){

    // id.toLowercase() this will throw an error

    if(typeof id === 'string'){
        id.toLowerCase()
    }
}

const arr: number[] = [1,2,3,4]
const arr1: string[] = ['1','Riyas']
const arr2: (number | string | boolean)[] = [4, '3', true]


// creating a const values
let seatAllotment: "gold" | "platinum" | "silver"

seatAllotment = 'gold'



export{}