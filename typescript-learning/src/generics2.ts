
//  Generics in array and arrow function

function getProduct<T>(products: T[]): T {
    // db operations
    const searchedProducts = 3
    return products[searchedProducts]
}


const getMoreProduct = <T>(products: T[]): T  => {
    // db operations
    const searchedProducts = 4
    return products[searchedProducts]
}

