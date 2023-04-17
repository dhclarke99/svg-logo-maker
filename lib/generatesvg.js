
function generateFile(data) {
return `<?xml version="1.0" standalone="no"?>
<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
 

  <rect x="10" y="10" width="30" height="30"/>



  <polygon points="200,10 250,190 160,210" style="fill:lime;stroke:purple;stroke-width:1" />

</svg>`;
}

module.exports = {
    generateFile
}