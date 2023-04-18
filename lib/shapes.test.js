const shapes = require('./shapes')

describe('Shapes', () => {
    // Test to verify that a fill property is correctly passed into a circle class
    describe('initialize fill on circle', () => {
      it('should be blue on the Circle class', () => {

        const circle = new shapes.Circle(0, "blue", 0, 0, 0, 0)
        
        
  
        expect(circle.fill).toEqual("blue");
      });
    });

    describe('initialize fill on square', () => {
        it('should be blue on the square class', () => {
  
          const square = new shapes.Square(0, "blue", 0, 0, 0, 0)
          
          
    
          expect(square.fill).toEqual("blue");
        });
      });

      describe('initialize fill on triangle', () => {
        it('should be blue on the triangle class', () => {
  
          const triangle = new shapes.Triangle(0, "blue", 0, 0, 0, 0)
          
          
    
          expect(triangle.fill).toEqual("blue");
        });
      });
});