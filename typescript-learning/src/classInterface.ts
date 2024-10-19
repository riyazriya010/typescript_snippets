interface TakePhoto {
    cameraMode: string
    filter: string
    brust: number
}

interface Story {
    createStory(): void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number
    ){}

}

class Youtube implements TakePhoto, Story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public brust: number,
        public short: string // adding more properties is not a problem
    ){}

    createStory(): void {
        console.log('story created')
    }

}
