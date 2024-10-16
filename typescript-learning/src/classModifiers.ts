
class User {
    readonly city: string = 'Jaipur'
    constructor(
        public email: string, 
        public name: string,
        private userId: number
    ){

    }
}
const user = new User('r@rgmail.com', 'riyas', 723)

export{}