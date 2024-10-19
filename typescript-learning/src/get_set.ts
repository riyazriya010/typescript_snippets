class User {

    private courseCount: number = 0

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

const user = new User('r@r', 'riyas')

export{}