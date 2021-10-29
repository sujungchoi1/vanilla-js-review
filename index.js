const hexInput = document.getElementById('hexInput');
const inputColor = document.getElementById('inputColor');

// Changing the input color div 
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value;
    if(!isValidHex(hex)) return;

    const strippedHex = hex.replace('#', ''); // so input works without #

    inputColor.style.backgroundColor = '#' + strippedHex; // making sure # is there for styling
})

// Validating hex input
const isValidHex = (hex) => {
    if (!hex) return false;
    
    const strippedHex = hex.replace('#', '');
    let regex = /^[0-9a-fA-F]+$/;

    return (strippedHex.length === 3 || strippedHex.length === 6) && regex.test(strippedHex);
}

// console.log(isValidHex("#f00000")) // true
// console.log(isValidHex("#fff")) // true
// console.log(isValidHex("#ac")) // false

// Converting HEX to RGB
const convertHexToRGB = (hex) => {
  if(!isValidHex(hex)) return null;
  
  let strippedHex = hex.replace('#','');
  
  if(strippedHex.length === 3) {
    strippedHex = strippedHex[0] + strippedHex[0]
    + strippedHex[1] + strippedHex[1]
    + strippedHex[2] + strippedHex[2];
  }
  
  const r  = parseInt(strippedHex.substring(0,2), 16);
  const g  = parseInt(strippedHex.substring(2,4), 16);
  const b  = parseInt(strippedHex.substring(4,2), 16);

  return {r,g,b};
}

// console.log(convertHexToRGB('123'));