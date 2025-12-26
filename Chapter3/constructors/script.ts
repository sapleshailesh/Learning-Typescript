//import { ProjectConstants } from './constants';

class Point2D {
    xPos: number;
    yPos: number;

    constructor(xPos: number, yPos: number) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
}

const point2d:Point2D =new Point2D(10,20);
console.log(`Point 2D coordinates are: ${point2d.xPos} and ${point2d.yPos}`)

class Point3D extends Point2D {
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

const point3d:Point3D = new Point3D(10, 20, 30);
point3d.displayCoordinates();
