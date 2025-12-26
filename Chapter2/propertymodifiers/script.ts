
interface Point2D {
    xPos: number,
    yPos:number,
    name?: string
}

const a:Point2D ={
    xPos:2,
    yPos:4,
}
a.name='xyz'
console.log(a)
