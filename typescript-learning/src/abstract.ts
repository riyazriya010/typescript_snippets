 // this is the blue print of the other class which extend this class
abstract class TakePhoto {
    constructor(
        public camerMode: string,
        public filter: string
    ){}

    abstract getSepia(): void

    getReelTime(): number {
        // some complex calculation
        return 8
    }
}
 
// Cannot create an instance of an abstract class.
// const hc = new TakePhoto('foggy', 'dark')

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        
    }
}

const inst = new Instagram("test", "Test", 3)
inst.getReelTime() // this will allow



export{}