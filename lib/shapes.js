
class Shapes{
    constructor (stroke, fill, strokeWidth, ){
    
    this.stroke = stroke;
    this.fill = fill;
    this.strokeWidth = strokeWidth;
   

    }
}

class Circle extends Shapes{
    constructor(stroke, fill, strokeWidth, cx, cy, radius ){
        super(stroke, fill, strokeWidth);
        this.cx = cx;
        this.cy = cy;
        this.radius = radius
    }
}

class Square extends Shapes{
    constructor(stroke, fill, strokeWidth, xPoint, yPoint, width, height){
        super(stroke, fill, strokeWidth);
        this.xPoint = xPoint;
        this.yPoint = yPoint;
        this.width = width;
        this.height = height
    }
}

class Triangle extends Shapes{
    constructor(stroke, fill, strokeWidth, points ){
        super(stroke, fill, strokeWidth);
        this.points = points;

    }
}

function newCircle(data){
const newCircle = new Circle (data.shapeColor, data.shapeColor, "stroke-width='5'", "cx='145'", "cy='135'", "r='100'")
return newCircle

}

function newSquare(data){
    const newSquare = new Square (data.shapeColor, data.shapeColor, "stroke-width='5'", "x='50'", "y='50'", "width='200'", "height='200'")
    return newSquare
    
    }

function newTriangle(data){
     const newTriangle = new Triangle (data.shapeColor, data.shapeColor, "stroke-width='5'", "points='150 15, 300 300, 4 300'")
     return newTriangle
        
     }

module.exports = {
    newTriangle,
    newSquare,
    newCircle,
    Circle,
    Square,
    Triangle
}
