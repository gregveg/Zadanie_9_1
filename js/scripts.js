function getTriangleArea(a, h) {
    if (a > 0 && h > 0) {
      return (a*h/2)
    } 
    else {
      return ('Nieprawidłowe dane')
    }
};
var triangle1Area = getTriangleArea(10, 15)
var triangle2Area = getTriangleArea(0, 5)
var triangle3Area = getTriangleArea(-1, 7)
console.log( triangle1Area)
console.log( triangle2Area)
console.log( triangle3Area)
