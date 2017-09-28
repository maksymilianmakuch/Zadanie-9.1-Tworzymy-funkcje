var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(3, 8),
	triangle3Area = getTriangleArea(12, 16);

function getTriangleArea(a, h) {
	if ((a <= 0) || (h <= 0)) {
	return 'Nieprawidłowe dane';
	} else ((a <= 0) && (h <= 0)) 
	return a*h/2;
}
console.log(getTriangleArea(10, 6));
console.log(getTriangleArea(10, 15));
console.log(getTriangleArea(3, 8));
console.log(getTriangleArea(12, 16));
