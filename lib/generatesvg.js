const Shapes = require('./shapes')

function setShape(data){
    if(data.shape === "circle"){
        const createCircle = Shapes.newCircle(data)
        console.log(createCircle)
        return createCircle

} else {
    console.log("no")
  
}

}

// function setText() {

// }







function generateFile(data) {
return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

 
      		<${data.shape} stroke='${setShape(data).stroke}' fill='${setShape(data).stroke}' ${setShape(data).strokeWidth} ${setShape(data).cx} ${setShape(data).cy} ${setShape(data).radius}/>
      		<text x="80" y="130" fill="${data.textColor}">${data.characters}</text>
   

  </svg>`;
}

module.exports = {
    generateFile,
    setShape,
//     setText
}