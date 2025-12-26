export class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

export class Point3D extends Point2D {
    zPos: number;
    //message: string = ProjectConstants.TEST
    constructor(xPos: number, yPos: number, zPos: number) {
        super(xPos, yPos);
        this.zPos = zPos;
    }

     displayCoordinates(): void {
        console.log(`Point 3D coordinates are: ${this.xPos}, ${this.yPos} and ${this.zPos}`);
    }

}
