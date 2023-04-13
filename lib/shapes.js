const { text } = require("stream/consumers");

class Shapes{
    constructor (characters, textColor, shape, shapeColor ){
    this.characters = characters;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;

    }
}

class Circle extends Shapes{
    constructor(characters, textColor, shape, shapeColor ){
        super(characters, textColor, shape, shapeColor);
    }
}

class Square extends Shapes{
    constructor(characters, textColor, shape, shapeColor ){
        super(characters, textColor, shape, shapeColor);
    }
}

class Triangle extends Shapes{
    constructor(characters, textColor, shape, shapeColor ){
        super(characters, textColor, shape, shapeColor);
    }
}

