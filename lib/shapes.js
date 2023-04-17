
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
const newCircle = new Circle (data.shapeColor, data.shapeColor, "stroke-width='5'", "cx='25'", "cy='75'", "r='20'")
return newCircle

}

function newSquare(data){
    const newSquare = new Square (data.shapeColor, data.shapeColor, "stroke-width='5'", "x='30'", "y='30'", "width='30'", "height='30'")
    return newSquare
    
    }

module.exports = {
    newSquare,
    newCircle,
    Circle,
    Square,
    Triangle
}
