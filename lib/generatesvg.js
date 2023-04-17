const Shapes = require('./shapes')

function setShape(data){
    if(data.shape === "circle"){
        const createCircle = Shapes.newCircle(data)
        console.log(createCircle)
        return createCircle

} else if (data.shape === "square"){
    const createSquare = Shapes.newSquare(data)
        console.log(createSquare)
        return createSquare
} else if (data.shape === "triangle"){
    const createTriangle = Shapes.newTriangle(data)
        console.log(createTriangle)
        return createTriangle
} 

}



function generateFile(data) {
    if (data.shape === "circle") {
return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

 
      		<${data.shape} stroke='${setShape(data).stroke}' fill='${setShape(data).stroke}' ${setShape(data).strokeWidth} ${setShape(data).cx} ${setShape(data).cy} ${setShape(data).radius}/>
      		<text x="135" y="135" fill="${data.textColor}">${data.characters}</text>
   

  </svg>`;
    } else if (data.shape === "square") {
    return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">

 
      		<rect stroke='${setShape(data).stroke}' fill='${setShape(data).stroke}' ${setShape(data).strokeWidth} ${setShape(data).xPoint} ${setShape(data).yPoint} ${setShape(data).width} ${setShape(data).height}/>
      		<text x="135" y="135" fill="${data.textColor}">${data.characters}</text>
   

  </svg>`;
    
  } else if (data.shape === "triangle") {
    return `<?xml version="1.0" standalone="no"?>
    <svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
    
     
                  <polygon stroke='${setShape(data).stroke}' fill='${setShape(data).stroke}' ${setShape(data).strokeWidth} ${setShape(data).points}/>
                  <text x="135" y="135" fill="${data.textColor}">${data.characters}</text>
       
    
      </svg>`;
    
  }
}

module.exports = {
    generateFile,
    setShape,
}