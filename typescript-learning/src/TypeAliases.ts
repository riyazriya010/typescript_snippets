type User = {
    name: string,
    age: number,
    email: string,
    isLogin: boolean
}

function createUser(user: User): User {
    return {'name': user.name, 'age':user.age, 'email': user.email, 'isLogin': user.isLogin}
}

createUser({'name': 'Riyas', 'age': 23, 'email': 'riyas@gmail.com', 'isLogin': true})