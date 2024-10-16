interface User {
    readonly DBID: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string // method 1
    startTrail(): string  // method 2
    getCoupon(couponName: string, value: number): number
}

interface User { // adding onemore feild to user without disturbing previous
    githubToken: string
}

// extending the Users for Admin for using the property
// we can extends more that one interface
interface Admin extends User {
    role: "admin" | "tl" | "learner"
}

// Admin
let user1: Admin = {
    DBID: 344,
    email: 'rtert',
    role: "admin",
    githubToken: 'ri23',
    userId: 24,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: 'diwalicoupon', code: 234) => {
        return 24
    }
}


// User
let user: User = {
    DBID: 344,
    email: 'rtert',
    githubToken: 'ri23',
    userId: 24,
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: 'diwalicoupon', code: 234) => {
        return 24
    }
}

export{}