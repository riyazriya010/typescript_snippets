class User {
    
    private courseCount: number = 0

    readonly city: string = 'Jaipur'
    constructor(
        public email: string, 
        public name: string,
        // private userId: number
    ){

    }

    get getCoursecount(): number {
        return this.courseCount
    }

    set setCoursecount(value: number){
        this.courseCount += value
    }
}

export{}