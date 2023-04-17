const Shapes = require('./shapes')

function setShape(data){
    if(data.shape === "circle"){
        const createCircle = Shapes.newCircle(data)
        console.log("yes")
        return `${createCircle}`

} else {
    console.log("no")
  
}

}

// function setText() {

// }







function generateFile(data) {
return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

 
      		<${data.shape} />
      		<text x="80" y="130" fill=""></text>
   

  </svg>`;
}

module.exports = {
    generateFile,
    setShape,
//     setText
}