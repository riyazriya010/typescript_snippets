
class User {
    // predefining values with datatype
    email: string
    name: string
    readonly city: string = "Hyderabad" // default values and can't change

    constructor(email: string, name: string){
        this.email = email,
        this.name = name
    }
}

const hitesh = new User('h@hgmail.com', 'hitesh');

export{}
