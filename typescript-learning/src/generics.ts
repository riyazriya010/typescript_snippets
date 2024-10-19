function indentity<Type>(val: Type): Type{
    return val
}

indentity(3)

function indentityTwo<T>(val: T): T{
    return val
}

indentity("Riyas")


function indentityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

indentityFour<Bottle>({
    brand: 'Nike',
    type: 1
})