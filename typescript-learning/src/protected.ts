class User {

    protected courseCount: number = 0

    readonly city: string = 'Jaipur'
    constructor(
        public email: string, 
        public name: string,
        // private userId: number
    ){

    }

    private deleteToken(){
        console.log('Delete Token');
    }

    get getCoursecount(): number {
        return this.courseCount
    }

    set setCoursecount(value: number){
        this.courseCount += value
    }
}

class SubUser extends User {
    isFamily: string = ''
    changeCount(){
        this.courseCount = 2
    }
}

const user = new User('r@r', 'riyas')

export{}