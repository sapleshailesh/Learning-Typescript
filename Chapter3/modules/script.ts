import { Point2D, Point3D } from './lib';

const point2d:Point2D =new Point2D(10,20);
console.log(`Point 2D coordinates are: ${point2d.xPos} and ${point2d.yPos}`)

const point3d:Point3D = new Point3D(10, 20, 30);
point3d.displayCoordinates();
