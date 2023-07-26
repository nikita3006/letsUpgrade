function calculateArea(length, width) {
   
    if (typeof length !== 'number' || typeof width !== 'number' || length <= 0 || width <= 0) {
      throw new Error('Both length and width must be valid positive numbers.');
    }
  
   
    const area = length * width;
  
    return area;
  }

const length = 5;
const width = 3;
const area = calculateArea(length, width);
console.log('Area:', area); 
  