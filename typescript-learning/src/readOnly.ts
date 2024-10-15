type Users = {
    readonly _id: string, //readonly
    name: string,
    email: string,
    cardNumber?: number //optional
}

let user: Users = {
    _id: '234',
    name: 'Riyas',
    email: 'riyas@gmail.com',
}

//// another options
type cardNumber = {
    cardnumber: number
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardDate & cardNumber & {  // combained both
    cvv: number
}
