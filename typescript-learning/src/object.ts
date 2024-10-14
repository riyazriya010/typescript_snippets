
function createUser({ name, isPaid }: { name: string; isPaid: boolean }){}

// createUser({name: 'Riyas', isPaid: true, email: 'riyas@gmail.com'}) this will through the error

let user = {name: 'Riyas', isPaid: true, email: 'riyas@gmail.com'}

createUser(user)

export{}